import { ImgElems } from "@/components/atoms/ImgElem/ImgElem";
import Layout from "@/components/styled/Layout.styled";
import useMeta from "@/hooks/useMeta.hook";
import { Colors } from "@/styles/app.styled";
import S from "@/styles/error-404.styled";
import React from "react";

type Error404PageProps = {};

const Error404Page: React.FC<Error404PageProps> = () => {
  useMeta("Secure My Scholarship | Not Found");

  return (
    <Layout.Wide background={Colors.Black101010}>
      <S.Container>
        <S.Image img={ImgElems.Error404} />
        <S.Title>
          Well this is embarassing, we seem to have lost a page!
        </S.Title>
        <S.Subtitle>
          Quick! Try refreshing your page before you miss out on awesome
          scholarships!
        </S.Subtitle>
      </S.Container>
    </Layout.Wide>
  );
};

export default Error404Page;
