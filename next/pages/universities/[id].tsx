import Env from "@/configs/env.config";
import { Codes, Exception } from "$/types/error.type";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "@/components/styled/Layout.styled";
import DetailsHeaderUniversity, {
  DetailsHeaderUniversityProps,
} from "@/components/organisms/DetailsHeader/DetailsHeaderUniversity";
import { Colors } from "@/styles/app.styled";
import axios from "axios";
import { ScholarshipCardProps } from "@/components/molecules/ScholarshipCard/ScholarshipCard";
import ApiRoutes from "@/routes/ApiRoutes.route";
import { useQuery } from "react-query/";
import dynamic from "next/dynamic";
import DetailsBreadcrumb from "@/components/molecules/DetailsBreadcrumb/DetailsBreadcrumb";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Divider from "@/components/styled/Divider.styled";
import DetailsContactCounsellor from "@/components/organisms/DetailsContactCounsellor/DetailsContactCounsellor";
import SecureScholarshipPrompt from "@/components/molecules/SecureScholarshipPrompt/SecureScholarshipPrompt";
import { useWindowEventListener } from "@/hooks/useEventListener.hook";
import useMeta from "@/hooks/useMeta.hook";

const DetailsScholarships = dynamic(
  () => import("@/components/organisms/DetailsScholarships/DetailsScholarships")
);
const DetailsInformation = dynamic(
  () => import("@/components/organisms/DetailsInformation/DetailsInformation")
);
const DetailsFindCourse = dynamic(
  () => import("@/components/organisms/DetailsFindCourse/DetailsFindCourse")
);
const DetailsMap = dynamic(
  () => import("@/components/organisms/DetailsMap/DetailsMap")
);
const DetailsPopularUniversities = dynamic(
  () =>
    import(
      "@/components/organisms/DetailsPopularUniversities/DetailsPopularUniversities"
    )
);

type UniversityPageProps = {
  institute: DetailsHeaderUniversityProps;
  seo_tags: {
    meta_title: string;
    meta_description: string;
  };
  fee_waivers: ScholarshipCardProps[];
};

const UniversityPage: React.FC<UniversityPageProps> = ({
  institute,
  seo_tags: { meta_title, meta_description },
  fee_waivers,
}) => {
  const [showPrompt, setShowPrompt] = React.useState(false);

  useWindowEventListener("scroll", () => {
    const _showPrompt = window.scrollY > window.innerHeight;
    if (_showPrompt !== showPrompt) setShowPrompt(_showPrompt);
  });

  useMeta(
    meta_title || institute.institute_name,
    meta_description || institute.institute_name
  );

  const { data } = useQuery(
    ["universities", "id", institute.institute_id],
    async () => {
      const res = await ApiRoutes.university(institute.institute_id);
      const result = res.results[0];

      return {
        institute_info: result.institute.details.description,
        admission_reqs: result.institute.details.admission_reqs,
        address: result.institute.details.location.address,
      };
    }
  );

  const institute_info = data ? data.institute_info : "";
  const admission_reqs = data ? data.admission_reqs : "";
  const address = data ? data.address : "";

  return (
    <Layout.Wide background={Colors.Greye5e5e5}>
      <DetailsBreadcrumb
        crumbs={[
          { text: "Universities", link: LinkRoutes.Universities },
          {
            text: institute.institute_name,
            link: LinkRoutes.University(institute.institute_id),
          },
        ]}
      />

      <DetailsHeaderUniversity {...institute} />

      <Layout.Centered maxWidth={1168}>
        <main>
          <DetailsScholarships fee_waivers={fee_waivers} />

          <DetailsInformation
            info={institute_info}
            admission_reqs={admission_reqs}
          />

          <DetailsFindCourse institute_name={institute.institute_name} />

          <DetailsContactCounsellor institute_id={institute.institute_id} />

          <DetailsMap
            address={address}
            institute_name={institute.institute_name}
            country_name={institute.country_name}
          />

          <DetailsPopularUniversities
            institute_id={institute.institute_id}
            country_name={institute.country_name}
          />

          <Divider height={3} />
        </main>

        <SecureScholarshipPrompt
          visible={showPrompt}
          institute_id={institute.institute_id}
          institute_name={institute.institute_name}
          country_name={institute.country_name}
          logo_img={institute.images.logo_img}
        />
      </Layout.Centered>
    </Layout.Wide>
  );
};

export default UniversityPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<UniversityPageProps> = async (
  context
) => {
  try {
    if (!context.params) {
      throw Exception.details(Codes.BAD_REQUEST, "No university id provided");
    }

    const { id } = context.params;

    const { data } = await axios.post<any>(
      `${Env.UCP_API_URL}/search/institutes/${id}`,
      {
        format: [
          "institute_seo_tags",
          "institute_images",
          "course_stats",
          "fee_waiver_details",
          "fee_waiver_stats",
        ],
      }
    );

    if (data.results.length !== 1) {
      throw Exception.details(Codes.NOT_FOUND, "University not found");
    }

    const result = data.results[0];
    const tuition = result.institute.details.avg_tuition_per_year.in_currency;

    const levels: any[] = result.course.stats.level_count;

    const findLevelCount = (level_name: string) =>
      levels.find((o) => o.level.name === level_name)?.active_count ?? 0;

    const findLevelTuition = (level_name: string) => {
      const _count = findLevelCount(level_name);
      const _tuition =
        (tuition.per_level as any[]).find((o) => o.level.name === level_name)
          ?.value ?? 0;
      return _count * _tuition;
    };

    const fd_count = findLevelCount("Foundation");
    const dp_count = findLevelCount("Diploma");
    const ug_count = findLevelCount("Undergraduate");
    const pg_count = findLevelCount("Postgraduate");
    const pd_count = findLevelCount("PhD");

    const fd_tuition = findLevelTuition("Foundation");
    const dp_tuition = findLevelTuition("Diploma");
    const ug_tuition = findLevelTuition("Undergraduate");
    const pg_tuition = findLevelTuition("Postgraduate");
    const pd_tuition = findLevelTuition("PhD");

    const ug_avg_tuition =
      (fd_tuition + dp_tuition + ug_tuition) / (fd_count + dp_count + ug_count);
    const pg_avg_tuition = (pg_tuition + pd_tuition) / (pg_count + pd_count);

    return {
      props: {
        institute: {
          institute_id: result.institute.id,
          institute_name: result.institute.name,
          country_name: result.institute.details.location.country.name,
          qs_rank: result.institute.details.qs_rank,
          course_count: result.course.stats.active_count,
          fee_waiver_count: result.fee_waiver.stats.active_count,
          tuition_fee: {
            currency: tuition.currency,
            undergraduate_value: ug_avg_tuition,
            postgraduate_value: pg_avg_tuition,
          },
          images: {
            logo_img: result.institute.images.logo_img,
            banner_img: result.institute.images.banner_img,
          },
        },
        seo_tags: {
          meta_title: result.institute.seo_tags.meta_title,
          meta_description: result.institute.seo_tags.meta_description,
        },
        fee_waivers: result.fee_waiver.fee_waivers
          .filter((o: any) => o.details.is_active === true)
          .map(
            (o: any): ScholarshipCardProps => ({
              institute_id: result.institute.id,
              fee_waiver_id: o.id,
              title: o.name,
              valid_until: o.details.expiry,
              level_name: o.level.name,
              promotional_scholarship: o.details.promotional_scholarship,
            })
          ),
      },
      notFound: false,
      revalidate: 60 * 60,
    };
  } catch (err) {
    console.error(err);
    return { props: {}, notFound: true, revalidate: 60 * 60 };
  }
};
