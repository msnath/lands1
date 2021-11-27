import React from "react";
import Image from "next/image";
import {
  PlaceholderBanner,
  PlaceholderLogo,
} from "@/components/atoms/ImgElem/ImgElem";
import S from "./DetailsHeader.styled";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import {
  formatCourseCount,
  formatFeeWaiverCount,
  formatTuitionFee,
} from "@/utils/functions.util";
import { TestIDs } from "@/utils/test.util";

export type DetailsHeaderUniversityProps = {
  institute_id: number;
  institute_name: string;
  country_name: string;
  qs_rank: number | null;
  course_count: number;
  fee_waiver_count: number;
  tuition_fee: {
    currency: string;
    undergraduate_value: number;
    postgraduate_value: number;
  };
  images: {
    logo_img: string;
    banner_img: string;
  };
};

const DetailsHeaderUniversity: React.FC<DetailsHeaderUniversityProps> = ({
  institute_id,
  institute_name,
  country_name,
  qs_rank,
  course_count,
  fee_waiver_count,
  tuition_fee: { currency, undergraduate_value, postgraduate_value },
  images: { logo_img, banner_img },
}) => {
  const ug_tuition_txt = formatTuitionFee(currency, undergraduate_value);
  const pg_tuition_txt = formatTuitionFee(currency, postgraduate_value);

  const scholarships_txt = formatFeeWaiverCount(fee_waiver_count);

  const courses_txt = formatCourseCount(course_count);

  return (
    <S.Header data-testid={TestIDs.DetailsHeaderUniversity}>
      <S.Banner>
        <Image
          priority
          src={decodeURIComponent(banner_img ?? "") || PlaceholderBanner}
          alt={`Banner image of ${institute_name}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={
            decodeURIComponent(banner_img ?? "") || PlaceholderBanner.src
          }
        />
        <S.BannerShadow />
      </S.Banner>

      <S.Logo>
        <Image
          src={decodeURIComponent(logo_img ?? "") || PlaceholderLogo}
          alt={`Logo image of ${institute_name}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={
            decodeURIComponent(logo_img ?? "") || PlaceholderLogo.src
          }
        />
      </S.Logo>

      <S.Title>{institute_name}</S.Title>
      <S.Subtitle>
        <p>{country_name}</p>
        {qs_rank && (
          <S.QSRank>
            <SvgElem svg={SvgElems.IconQS} />
            <p>#{qs_rank}</p>
          </S.QSRank>
        )}
      </S.Subtitle>

      <S.StatsContainerUniversity>
        <DetailsHeaderStats
          title={"Annual Tuition (UG)"}
          text={ug_tuition_txt}
        />
        <DetailsHeaderStats
          title={"Annual Tuition (PG)"}
          text={pg_tuition_txt}
        />
        <DetailsHeaderStats
          title={"Total Scholarships"}
          text={scholarships_txt}
        />
        <DetailsHeaderStats title={"Total Courses"} text={courses_txt} />
        <Link href={LinkRoutes.Scholarship(institute_id)} passHref>
          <S.Scholarship>Secure Scholarship</S.Scholarship>
        </Link>
      </S.StatsContainerUniversity>
    </S.Header>
  );
};

type DetailsHeaderStatsProps = { title: string; text: string };

export const DetailsHeaderStats: React.FC<DetailsHeaderStatsProps> = ({
  title,
  text,
}) => {
  return (
    <S.StatsUniversity>
      <S.StatsTitle>{title}</S.StatsTitle>
      <S.StatsText>{text}</S.StatsText>
    </S.StatsUniversity>
  );
};

export default DetailsHeaderUniversity;
