import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import React from "react";
import S from "./CourseTile.styled";
import Image from "next/image";
import { PlaceholderLogo } from "@/components/atoms/ImgElem/ImgElem";
import { CourseCardProps } from "./CourseCard";
import { TestIDs } from "@/utils/test.util";

export type CourseTileProps = Pick<
  CourseCardProps,
  | "objectID"
  | "course_id"
  | "course_name"
  | "institute_name"
  | "country_name"
  | "images"
>;

const CourseTile: React.FC<CourseTileProps> = ({
  course_id,
  course_name,
  institute_name,
  country_name,
  images,
}) => {
  return (
    <S.Tile data-testid={TestIDs.CourseTile}>
      <Link href={LinkRoutes.Course(course_id)} passHref>
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
            <S.Title>{course_name}</S.Title>
            <S.Text1>{institute_name}</S.Text1>
            <S.Text2>{country_name}</S.Text2>
          </S.Information>
        </S.Anchor>
      </Link>
    </S.Tile>
  );
};

export default CourseTile;
