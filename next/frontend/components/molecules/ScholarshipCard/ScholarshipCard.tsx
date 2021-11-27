import LinkRoutes from "@/routes/LinkRoutes.route";
import { TestIDs } from "@/utils/test.util";
import moment from "moment";
import Link from "next/link";
import React from "react";
import S from "./ScholarshipCard.styled";

export type ScholarshipCardProps = {
  institute_id: number;
  fee_waiver_id: number;
  title: string;
  valid_until: Date;
  level_name: string;
  promotional_scholarship: string;
  course_id?: number;
};

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  institute_id,
  title,
  valid_until,
  level_name,
  promotional_scholarship,
  course_id,
}) => {
  const formattedValidUntil = moment(valid_until).format("MMM DD, YYYY");

  return (
    <S.Card data-testid={TestIDs.ScholarshipCard}>
      <S.Title>{title}</S.Title>
      <S.Grid>
        <S.Box>
          <p>Apply By</p>
          <p>{formattedValidUntil}</p>
        </S.Box>
        <S.Box>
          <p>Education Level</p>
          <p>{level_name}</p>
        </S.Box>
        <S.Promotion empty={promotional_scholarship ? 0 : 1}>
          <p>{promotional_scholarship}</p>
        </S.Promotion>
        <Link href={LinkRoutes.Scholarship(institute_id, course_id)} passHref>
          <S.Button>Secure Scholarship</S.Button>
        </Link>
      </S.Grid>
    </S.Card>
  );
};

export default ScholarshipCard;
