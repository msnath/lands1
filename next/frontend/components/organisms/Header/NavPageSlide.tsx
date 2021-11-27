import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import React from "react";
import S from "./NavPageSlide.styled";

type NavPageSlideProps = {
  onBack?: () => void;
  offset: 0 | 1 | 2;
  current: boolean;
};

const NavPageSlide: React.FC<NavPageSlideProps> = ({
  offset,
  current,
  onBack,
  children,
}) => {
  return (
    <S.Slide offset={offset} current={current} hasOnBack={!!onBack}>
      {onBack && (
        <li>
          <S.Back onClick={onBack}>
            <SvgElem svg={SvgElems.IconChevronLeft} />
            <p>Back</p>
          </S.Back>
        </li>
      )}

      <S.List>{children}</S.List>
    </S.Slide>
  );
};

export default NavPageSlide;
