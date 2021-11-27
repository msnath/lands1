import React from "react";
import LinkRoutes from "@/routes/LinkRoutes.route";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import ScholarshipCardMini from "../ScholarshipCard/ScholarshipCardMini";
import Image from "next/image";
import {
  PlaceholderBanner,
  PlaceholderLogo,
} from "@/components/atoms/ImgElem/ImgElem";
import Link from "next/link";
import { capitalize, formatTuitionFee } from "@/utils/functions.util";
import S from "./UniversityCard.styled";
import useTooltip from "@/hooks/useTooltip.hook";
import { TestIDs } from "@/utils/test.util";

export type UniversityCardProps = {
  objectID: string;
  institute_id: number;
  institute_name: string;
  country_name: string;
  city_name: string;
  qs_rank: number | null;
  courses: number;
  tuition_fee: { currency_code: string; tuition_fee: number | null };
  fee_waivers: {
    title: string;
    level_name: string;
    promotional_scholarship: string;
  }[];
  images: { logo_img: string; banner_img: string };
};

const UniversityCard: React.FC<UniversityCardProps> = ({
  country_name,
  city_name,
  courses,
  fee_waivers,
  images,
  institute_id,
  institute_name,
  qs_rank,
  tuition_fee,
}) => {
  const text =
    fee_waivers.length === 1
      ? fee_waivers[0].title +
        " On " +
        capitalize(fee_waivers[0].level_name) +
        " Courses"
      : fee_waivers.length + " Scholarships Available";

  const tuitionFeeFormatted = formatTuitionFee(
    tuition_fee?.currency_code,
    tuition_fee?.tuition_fee
  );

  const coursesFormatted = courses
    ? courses + (courses === 1 ? " Course" : " Courses")
    : "—";

  const location_name = city_name
    ? `${city_name}, ${country_name}`
    : country_name;

  const [refInstitute, tooltipInstitute] =
    useTooltip<HTMLParagraphElement>(institute_name);

  const [refCountry, tooltipCountry] =
    useTooltip<HTMLParagraphElement>(location_name);

  return (
    <S.Card data-testid={TestIDs.UniversityCard}>
      <Link href={LinkRoutes.University(institute_id)}>
        <a aria-label="View university" target="_blank">
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
            {qs_rank && (
              <S.QS>
                <SvgElem svg={SvgElems.IconQS} />
                <p>#{qs_rank}</p>
              </S.QS>
            )}
          </S.Images>

          <S.Wave svg={SvgElems.CardWave} />
          <S.Body>
            <p ref={refInstitute} data-tip={tooltipInstitute}>
              {institute_name}
            </p>

            <p ref={refCountry} data-tip={tooltipCountry}>
              {location_name}
            </p>

            <p>
              Est. Tuition/Year <span>{tuitionFeeFormatted}</span>
            </p>
            <p>
              No. of Courses <span>{coursesFormatted}</span>
            </p>
          </S.Body>
        </a>
      </Link>

      <S.Scholarships>
        {fee_waivers.length > 1 ? (
          <Link href={LinkRoutes.UniversityScholarships(institute_id)}>
            <a aria-label="View scholarships" target="_blank">
              <ScholarshipCardMini text={text} arrow />
            </a>
          </Link>
        ) : fee_waivers.length === 1 ? (
          <Link href={LinkRoutes.UniversityScholarships(institute_id)}>
            <a aria-label="View scholarships" target="_blank">
              <ScholarshipCardMini text={text} />
            </a>
          </Link>
        ) : null}
      </S.Scholarships>

      <S.Buttons>
        <Link href={LinkRoutes.Scholarship(institute_id)}>
          <a aria-label="Secure scholarship" target="_blank">
            Secure Scholarship
          </a>
        </Link>
        <Link href={LinkRoutes.University(institute_id)}>
          <a aria-label="View university" target="_blank">
            <SvgElem svg={SvgElems.IconArrowRightGrey} />
          </a>
        </Link>
      </S.Buttons>
    </S.Card>
  );
};

export default UniversityCard;
