import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import React from "react";
import S from "./UniversityCardMini.styled";
import Image from "next/image";
import { PlaceholderLogo } from "@/components/atoms/ImgElem/ImgElem";
import { TestIDs } from "@/utils/test.util";

export type UniversityCardMiniProps = {
  institute_id: number;
  institute_name: string;
  country_name: string;
  logo_img: string;
};

const UniversityCardMini: React.FC<UniversityCardMiniProps> = ({
  institute_id,
  institute_name,
  country_name,
  logo_img,
}) => {
  return (
    <S.Tile data-testid={TestIDs.UniversityCardMini}>
      <Link href={LinkRoutes.University(institute_id)} passHref>
        <S.Anchor>
          <S.Image>
            <Image
              src={decodeURIComponent(logo_img ?? "") || PlaceholderLogo}
              alt={`Logo for ${institute_name}`}
              layout="fill"
              placeholder="blur"
              blurDataURL={
                decodeURIComponent(logo_img ?? "") || PlaceholderLogo.src
              }
            />
          </S.Image>
          <S.Title>{institute_name}</S.Title>
          <S.Text>{country_name}</S.Text>
          <S.Arrow>
            <SvgElem svg={SvgElems.IconArrowRightBlue} />
          </S.Arrow>
        </S.Anchor>
      </Link>
    </S.Tile>
  );
};

export default UniversityCardMini;
