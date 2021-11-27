import Env from "@/configs/env.config";
import { Codes, Exception } from "$/types/error.type";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "@/components/styled/Layout.styled";
import DetailsHeaderCourse, {
  DetailsHeaderCourseProps,
} from "@/components/organisms/DetailsHeader/DetailsHeaderCourse";
import ApiRoutes from "@/routes/ApiRoutes.route";
import { useQuery } from "react-query";
import { ScholarshipCardProps } from "@/components/molecules/ScholarshipCard/ScholarshipCard";
import { Colors } from "@/styles/app.styled";
import dynamic from "next/dynamic";
import DetailsBreadcrumb from "@/components/molecules/DetailsBreadcrumb/DetailsBreadcrumb";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Divider from "@/components/styled/Divider.styled";
import DetailsExploreUniversity from "@/components/organisms/DetailsExploreUniversity/DetailsExploreUniversity";
import DetailsContactCounsellor from "@/components/organisms/DetailsContactCounsellor/DetailsContactCounsellor";
import SecureScholarshipPrompt from "@/components/molecules/SecureScholarshipPrompt/SecureScholarshipPrompt";
import { useWindowEventListener } from "@/hooks/useEventListener.hook";
import useMeta from "@/hooks/useMeta.hook";

const DetailsInformation = dynamic(
  () => import("@/components/organisms/DetailsInformation/DetailsInformation")
);
const DetailsScholarships = dynamic(
  () => import("@/components/organisms/DetailsScholarships/DetailsScholarships")
);
const DetailsSimilarCourses = dynamic(
  () =>
    import("@/components/organisms/DetailsSimilarCourses/DetailsSimilarCourses")
);

type CoursePageProps = {
  course: DetailsHeaderCourseProps;
  seo_tags: { meta_title: string; meta_description: string };
  fee_waivers: ScholarshipCardProps[];
};

const CoursePage: React.FC<CoursePageProps> = ({
  course,
  seo_tags: { meta_title, meta_description },
  fee_waivers,
}) => {
  const [showPrompt, setShowPrompt] = React.useState(false);

  useWindowEventListener("scroll", () => {
    const _showPrompt = window.scrollY > window.innerHeight;
    if (_showPrompt !== showPrompt) setShowPrompt(_showPrompt);
  });

  useMeta(
    meta_title || course.course_name,
    meta_description || course.course_name
  );

  const { data } = useQuery(["courses", "id", course.course_id], async () => {
    const res = await ApiRoutes.course(course.course_id);
    const result = res.results[0];

    return {
      course_info: result.course.details.description,
      admission_reqs: result.course.details.admission_reqs,
      country_name: result.institute.details.location.country.name,
      category_name: result.course.details.category.name,
      level_name: result.course.details.level.name,
      tuition_fee_in_usd: result.course.details.tuition_per_year.in_usd.value,
    };
  });

  const overview = data ? data.course_info : "";
  const admission_reqs = data ? data.admission_reqs : "";
  const country_name = data ? data.country_name : "";
  const category_name = data ? data.category_name : "";
  const level_name = data ? data.level_name : "";
  const tuition_fee_in_usd = data ? data.tuition_fee_in_usd : "";

  return (
    <Layout.Wide background={Colors.Greye5e5e5}>
      <DetailsBreadcrumb
        crumbs={[
          { text: "Courses", link: LinkRoutes.Courses },
          {
            text: course.course_name,
            link: LinkRoutes.Course(course.course_id),
          },
        ]}
      />

      <DetailsHeaderCourse {...course} />

      <Layout.Centered maxWidth={1168}>
        <main>
          <DetailsScholarships fee_waivers={fee_waivers} />

          <DetailsInformation info={overview} admission_reqs={admission_reqs} />

          <DetailsContactCounsellor
            institute_id={course.institute_id}
            course_id={course.course_id}
          />

          <DetailsExploreUniversity
            university={{
              institute_id: course.institute_id,
              institute_name: course.institute_name,
              country_name: country_name,
              logo_img: course.images.logo_img,
            }}
          />

          <DetailsSimilarCourses
            course_id={course.course_id}
            country_name={country_name}
            category_name={category_name}
            level_name={level_name}
            tuition_fee_in_usd={tuition_fee_in_usd}
          />

          <Divider height={3} />
        </main>

        <SecureScholarshipPrompt
          visible={showPrompt}
          institute_id={course.institute_id}
          institute_name={course.institute_name}
          country_name={country_name}
          logo_img={course.images.logo_img}
          course_id={course.course_id}
        />
      </Layout.Centered>
    </Layout.Wide>
  );
};

export default CoursePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<CoursePageProps> = async (
  context
) => {
  try {
    if (!context.params) {
      throw Exception.details(Codes.BAD_REQUEST, "No course id provided");
    }

    const { id } = context.params;

    const { data } = await axios.post<any>(
      `${Env.UCP_API_URL}/search/courses/${id}`,
      { format: ["course_seo_tags", "institute_images", "fee_waiver_details"] }
    );

    if (data.results.length !== 1) {
      throw Exception.details(Codes.NOT_FOUND, "Course not found");
    }

    const result = data.results[0];
    const tuition = result.course.details.tuition_per_year.in_currency;

    return {
      props: {
        course: {
          course_id: result.course.id,
          course_name: result.course.name,
          institute_id: result.institute.id,
          institute_name: result.institute.name,
          duration_tag: result.course.details.duration.tag,
          fee_waiver_count: result.fee_waiver.fee_waivers.filter(
            (f: any) => f.details.is_active === true
          ).length,
          tuition_fee: { currency: tuition.currency, value: tuition.value },
          images: {
            logo_img: result.institute.images.logo_img,
            banner_img: result.institute.images.banner_img,
          },
        },
        seo_tags: {
          meta_title: result.course.seo_tags.meta_title,
          meta_description: result.course.seo_tags.meta_description,
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
              course_id: result.course.id,
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
