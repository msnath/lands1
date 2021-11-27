import { TestIDs } from "@/utils/test.util";
import ExternalLinkUtil from "@/utils/external-link.util";
import Link from "next/link";
import React from "react";
import { ImgElems } from "../ImgElem/ImgElem";
import S from "./ArticleCard.styled";

export type ArticleCardProps = {
  href: string;
  img: ImgElems;
  border?: boolean;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ href, img, border }) => {
  return (
    <Link href={href}>
      <a
        data-testid={TestIDs.ArticleCard}
        aria-label="Visit article"
        {...ExternalLinkUtil.anchorProps}
      >
        <S.Image border={border ? 1 : 0} img={img} />
      </a>
    </Link>
  );
};

export default ArticleCard;
