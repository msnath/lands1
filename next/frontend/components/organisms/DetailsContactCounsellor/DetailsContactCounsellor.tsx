import ImgElem, { ImgElems } from "@/components/atoms/ImgElem/ImgElem";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import { TestIDs } from "@/utils/test.util";
import Link from "next/link";
import React from "react";
import S from "./DetailsContactCounsellor.styled";

type DetailsContactCounsellorProps = {
  institute_id: number;
  course_id?: number;
};

const DetailsContactCounsellor: React.FC<DetailsContactCounsellorProps> = ({
  institute_id,
  course_id,
}) => {
  return (
    <S.Container data-testid={TestIDs.DetailsContactCounsellor}>
      <S.Card>
        <S.Image>
          <ImgElem img={ImgElems.SpeakToCounsellor} />
        </S.Image>
        <S.Body>
          <p>Still having trouble with your applications?</p>
          <p>We&apos;re here to help!</p>
          <Link
            href={LinkRoutes.Scholarship(institute_id, course_id)}
            passHref
          >
            <S.Button>
              <SvgElem svg={SvgElems.IconMail} />
              Speak to a Counsellor
            </S.Button>
          </Link>
        </S.Body>
      </S.Card>
    </S.Container>
  );
};

export default DetailsContactCounsellor;
