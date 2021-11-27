import { useWindowEventListener } from "@/hooks/useEventListener.hook";
import { scrollToTop } from "@/utils/scroll.util";
import React from "react";
import { SvgElems } from "../../atoms/SvgElem/SvgElem";
import S from "./ScrollTopButton.styled";

const ScrollTopButton: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const checkScroll = () => setVisible(window.pageYOffset > window.innerHeight);

  useWindowEventListener("scroll", checkScroll);

  return (
    <S.Button opacity={visible ? 1 : 0} onClick={scrollToTop}>
      <S.Arrow svg={SvgElems.IconArrowUp} />
      <S.Text>Back to Top</S.Text>
    </S.Button>
  );
};

export default ScrollTopButton;
