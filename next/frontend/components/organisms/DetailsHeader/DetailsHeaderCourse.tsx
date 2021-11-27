import React from "react";
import Image from "next/image";
import {
  PlaceholderBanner,
  PlaceholderLogo,
} from "@/components/atoms/ImgElem/ImgElem";
import S from "./DetailsHeader.styled";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import { formatFeeWaiverCount, formatTuitionFee } from "@/utils/functions.util";
import { TestIDs } from "@/utils/test.util";

export type DetailsHeaderCourseProps = {
  course_id: number;
  course_name: string;
  institute_id: number;
  institute_name: string;
  duration_tag: string;
  fee_waiver_count: number;
  tuition_fee: {
    currency: string;
    value: number;
  };
  images: {
    logo_img: string;
    banner_img: string;
  };
};

const DetailsHeaderCourse: React.FC<DetailsHeaderCourseProps> = ({
  course_id,
  course_name,
  institute_id,
  institute_name,
  duration_tag,
  fee_waiver_count,
  tuition_fee,
  images,
}) => {
  const tuition_txt = formatTuitionFee(
    tuition_fee.currency,
    tuition_fee?.value
  );
  const scholarships_txt = formatFeeWaiverCount(fee_waiver_count);

  return (
    <S.Header data-testid={TestIDs.DetailsHeaderCourse}>
      <S.Banner>
        <Image
          priority
          src={
            decodeURIComponent(images?.banner_img ?? "") || PlaceholderBanner
          }
          alt={`Banner image of ${institute_name}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={
            decodeURIComponent(images?.banner_img ?? "") ||
            PlaceholderBanner.src
          }
        />
        <S.BannerShadow />
      </S.Banner>

      <S.Logo>
        <Image
          src={decodeURIComponent(images?.logo_img ?? "") || PlaceholderLogo}
          alt={`Logo image of ${institute_name}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={
            decodeURIComponent(images?.logo_img ?? "") || PlaceholderLogo.src
          }
        />
      </S.Logo>

      <S.Title>{course_name}</S.Title>
      <S.Subtitle>
        <p>{institute_name}</p>
      </S.Subtitle>

      <S.StatsContainerCourse>
        <DetailsHeaderStats title={"Course Duration"} text={duration_tag} />
        <DetailsHeaderStats title={"Est. Annual Tuition"} text={tuition_txt} />
        <DetailsHeaderStats title={"Scholarships"} text={scholarships_txt} />
        <Link href={LinkRoutes.Scholarship(institute_id, course_id)} passHref>
          <S.Scholarship>Secure Scholarship</S.Scholarship>
        </Link>
      </S.StatsContainerCourse>
    </S.Header>
  );
};

type DetailsHeaderStatsProps = { title: string; text: string };

export const DetailsHeaderStats: React.FC<DetailsHeaderStatsProps> = ({
  title,
  text,
}) => {
  return (
    <S.StatsCourse>
      <S.StatsTitle>{title}</S.StatsTitle>
      <S.StatsText>{text}</S.StatsText>
    </S.StatsCourse>
  );
};

export default DetailsHeaderCourse;
