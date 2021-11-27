import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import { formatDurationTag, formatTuitionFee } from "@/utils/functions.util";
import { TestIDs } from "@/utils/test.util";
import Link from "next/link";
import React from "react";
import S from "./CourseCardMini.styled";

export type CourseCardMiniProps = {
  objectID: string;
  course_id: number;
  course_name: string;
  tuition_fee: { currency_code: string; tuition_fee: number | null };
  duration: { duration_tag: string | null };
};

const CourseCardMini: React.FC<CourseCardMiniProps> = ({
  course_id,
  course_name,
  tuition_fee,
  duration,
}) => {
  const formattedTuitionFee = formatTuitionFee(
    tuition_fee?.currency_code,
    tuition_fee?.tuition_fee
  );

  const formattedDurationTag = formatDurationTag(duration?.duration_tag);

  return (
    <S.Tile data-testid={TestIDs.CourseCardMini}>
      <Link href={LinkRoutes.Course(course_id)} passHref>
        <S.Anchor>
          <S.Title>{course_name}</S.Title>
          <S.Content>
            <S.Text>
              Annual Fees: <span>{formattedTuitionFee}</span>
            </S.Text>
            <S.Text>
              Course Duration: <span>{formattedDurationTag}</span>
            </S.Text>
          </S.Content>
          <S.Arrow>
            <SvgElem svg={SvgElems.IconArrowRightBlue} />
          </S.Arrow>
        </S.Anchor>
      </Link>
    </S.Tile>
  );
};

export default CourseCardMini;
