import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import React from "react";
import S from "./SecureScholarshipPrompt.styled";
import Image from "next/image";
import { PlaceholderLogo } from "@/components/atoms/ImgElem/ImgElem";
import { TestIDs } from "@/utils/test.util";

export type SecureScholarshipPromptProps = {
  visible: boolean;
  institute_id: number;
  institute_name: string;
  country_name: string;
  logo_img: string;
  course_id?: number;
};

const SecureScholarshipPrompt: React.FC<SecureScholarshipPromptProps> = ({
  visible,
  institute_id,
  institute_name,
  country_name,
  logo_img,
  course_id,
}) => {
  return (
    <S.Prompt visible={visible} data-testid={TestIDs.SecureScholarshipPrompt}>
      <div>
        <S.Details>
          <S.Logo>
            <Image
              layout="intrinsic"
              src={decodeURIComponent(logo_img ?? "") || PlaceholderLogo}
              alt={institute_name}
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL={
                decodeURIComponent(logo_img ?? "") || PlaceholderLogo.src
              }
            />
          </S.Logo>
          <S.Title>{institute_name}</S.Title>
          <S.Text>{country_name}</S.Text>
        </S.Details>

        <Link href={LinkRoutes.Scholarship(institute_id, course_id)}>
          <a target="_blank">
            <S.Button>Secure Scholarship</S.Button>
          </a>
        </Link>
      </div>
    </S.Prompt>
  );
};

export default SecureScholarshipPrompt;
