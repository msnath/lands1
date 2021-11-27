import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import React from "react";
import S from "./UniversityTile.styled";
import Image from "next/image";
import { PlaceholderLogo } from "@/components/atoms/ImgElem/ImgElem";
import { UniversityCardProps } from "./UniversityCard";
import { TestIDs } from "@/utils/test.util";

export type UniversityTileProps = Pick<
  UniversityCardProps,
  "objectID" | "institute_id" | "institute_name" | "country_name" | "images"
>;

const UniversityTile: React.FC<UniversityTileProps> = ({
  institute_id,
  institute_name,
  country_name,
  images,
}) => {
  return (
    <S.Tile data-testid={TestIDs.UniversityTile}>
      <Link href={LinkRoutes.University(institute_id)} passHref>
        <S.Anchor>
          <S.Image>
            <Image
              src={decodeURIComponent(images.logo_img ?? "") || PlaceholderLogo}
              alt={`Logo for ${institute_name}`}
              layout="fill"
              placeholder="blur"
              blurDataURL={
                decodeURIComponent(images.logo_img ?? "") || PlaceholderLogo.src
              }
            />
          </S.Image>
          <S.Information>
            <S.Title>{institute_name}</S.Title>
            <S.Text>{country_name}</S.Text>
          </S.Information>
        </S.Anchor>
      </Link>
    </S.Tile>
  );
};

export default UniversityTile;
