import { bool } from "$/types/style.type";
import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";
import ImgElem from "../ImgElem/ImgElem";

type ImageProps = { border?: bool };

const Image = styled(ImgElem)<ImageProps>`
  & > div {
    border-radius: 1rem;

    ${(props) =>
      props.border &&
      css`
        border: 0.0625rem solid ${Colors.Whitef3f3f3};
      `}

    @media only screen and (min-width: 48rem) {
      border-radius: 1.25rem;
    }
  }
`;

const S = { Image };

export default S;
