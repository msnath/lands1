import React from "react";
import LinkRoutes from "@/routes/LinkRoutes.route";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import ScholarshipCardMini from "../ScholarshipCard/ScholarshipCardMini";
import Image from "next/image";
import Link from "next/link";
import { formatDurationTag, formatTuitionFee } from "@/utils/functions.util";
import S from "./CourseCard.styled";
import useTooltip from "@/hooks/useTooltip.hook";
import {
  PlaceholderBanner,
  PlaceholderLogo,
} from "@/components/atoms/ImgElem/ImgElem";
import { TestIDs } from "@/utils/test.util";

export type CourseCardProps = {
  objectID: string;
  institute_id: number;
  institute_name: string;
  institute_qs_rank: number | null;
  course_id: number;
  course_name: string;
  country_name: string;
  city_name: string;
  duration: { duration_tag: string | null };
  tuition_fee: { currency_code: string; tuition_fee: number | null };
  fee_waivers: {
    title: string;
    level_name: string;
    promotional_scholarship: string;
  }[];
  images: { logo_img: string; banner_img: string };
};

const CourseCard: React.FC<CourseCardProps> = ({
  country_name,
  city_name,
  course_id,
  course_name,
  duration,
  fee_waivers,
  images,
  institute_id,
  institute_name,
  tuition_fee,
}) => {
  const text =
    fee_waivers.length === 1
      ? fee_waivers[0].title
      : fee_waivers.length + " Scholarships Available";

  const description =
    fee_waivers.length === 1
      ? fee_waivers[0].promotional_scholarship
      : undefined;

  const formattedTuitionFee = formatTuitionFee(
    tuition_fee?.currency_code,
    tuition_fee?.tuition_fee
  );

  const formattedDurationTag = formatDurationTag(duration?.duration_tag);

  const location_name = city_name
    ? `${city_name}, ${country_name}`
    : country_name;

  const [refCourse, tooltipCourse] =
    useTooltip<HTMLParagraphElement>(course_name);

  const [refInstitute, tooltipInstitute] =
    useTooltip<HTMLParagraphElement>(institute_name);

  const [refCountry, tooltipCountry] =
    useTooltip<HTMLParagraphElement>(country_name);

  return (
    <S.Card data-testid={TestIDs.CourseCard}>
      <Link href={LinkRoutes.Course(course_id)}>
        <a aria-label="View course" target="_blank">
          <S.Images>
            <S.Banner>
              <Image
                layout="responsive"
                src={
                  decodeURIComponent(images.banner_img ?? "") ||
                  PlaceholderBanner
                }
                alt={institute_name}
                width={400}
                height={100}
                placeholder="blur"
                blurDataURL={
                  decodeURIComponent(images.banner_img ?? "") ||
                  PlaceholderBanner.src
                }
              />
            </S.Banner>
            <S.Logo>
              <Image
                layout="intrinsic"
                src={
                  decodeURIComponent(images.logo_img ?? "") || PlaceholderLogo
                }
                alt={institute_name}
                width={60}
                height={60}
                placeholder="blur"
                blurDataURL={
                  decodeURIComponent(images.logo_img ?? "") ||
                  PlaceholderLogo.src
                }
              />
            </S.Logo>
            {/* {institute_qs_rank && (
              <S.QS>
                <SvgElem svg={SvgElems.IconQS} />
                <p>#{institute_qs_rank}</p>
              </S.QS>
            )} */}
          </S.Images>
          <S.Wave svg={SvgElems.CardWave} />
          <S.Body>
            <p ref={refCourse} data-tip={tooltipCourse}>
              {course_name}
            </p>
            <p ref={refInstitute} data-tip={tooltipInstitute}>
              {institute_name}
            </p>
            <p ref={refCountry} data-tip={tooltipCountry}>
              {location_name}
            </p>

            <p>
              Est. Tuition/Year <span>{formattedTuitionFee}</span>
            </p>
            <p>
              Duration <span>{formattedDurationTag}</span>
            </p>
          </S.Body>
        </a>
      </Link>

      <S.Scholarships>
        {fee_waivers.length > 1 ? (
          <Link href={LinkRoutes.CourseScholarships(course_id)}>
            <a aria-label="View scholarships" target="_blank">
              <ScholarshipCardMini text={text} arrow />
            </a>
          </Link>
        ) : fee_waivers.length === 1 ? (
          <Link href={LinkRoutes.CourseScholarships(course_id)}>
            <a aria-label="View scholarships" target="_blank">
              <ScholarshipCardMini text={text} description={description} />
            </a>
          </Link>
        ) : null}
      </S.Scholarships>

      <S.Buttons>
        <Link href={LinkRoutes.Scholarship(institute_id, course_id)}>
          <a aria-label="Secure scholarship" target="_blank">
            Secure Scholarship
          </a>
        </Link>
        <Link href={LinkRoutes.Course(course_id)}>
          <a aria-label="View course" target="_blank">
            <SvgElem svg={SvgElems.IconArrowRightGrey} />
          </a>
        </Link>
      </S.Buttons>
    </S.Card>
  );
};

export default CourseCard;
