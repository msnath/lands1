import { boxshadow, Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

export type ShadeProps = { shade: "light" | "dark" };

const Carousel = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  overflow: hidden;
`;

type SlidesProps = { height: number; left: number };

const Slides = styled.ul<SlidesProps>`
  /* display: flex;
  flex-direction: row;
  align-items: stretch; */

  width: 100%;
  height: ${(props) => props.height}px;
  transition: all 500ms ease-in-out;
  ${(props) => css`
    transform: translateX(-${props.left}px);
  `};
`;

type SlideProps = { height: number; left: number };

const Slide = styled.li<SlideProps>`
  position: absolute;
  left: ${(props) => props.left}px;
  width: 100%;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0rem 1rem;
  & > * + * {
    margin: 0.75rem 0 0 0.5rem;
  }
`;

const Pages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type PageProps = ShadeProps & { selected: boolean };

const Page = styled.button<PageProps>`
  ${(props) =>
    css`
      width: 0.75rem;
      height: 0.75rem;
      background: ${props.selected ? Colors.Black3b3b3c : Colors.Grey8f8f90};
      border-radius: 50%;
      margin: 0rem 0.5rem;

      ${props.shade == "dark" &&
      css`
        background: ${props.selected ? Colors.Grey8f8f90 : Colors.Black3b3b3c};
      `};
    `}
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
`;

type ButtonProps = ShadeProps;

const Button = styled.button<ButtonProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    background: ${props.shade === "dark" ? Colors.Black3b3b3c : Colors.White};
    border: 0.125rem solid ${Colors.Greydbdfe7};
    border-radius: 1.25rem;
    padding: 0.5rem;
    transition: all 300ms ease;
    ${boxshadow};

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background: ${props.shade === "dark"
          ? Colors.Black3b3b3cbb
          : Colors.Whitef0f0f0};
      }
    }

    &:disabled {
      border: 0.125rem solid
        ${props.shade === "dark" ? Colors.Grey8f8f90 : Colors.Greydbdfe7};
      box-shadow: none;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2.5rem;
        height: 2.5rem;
        background: ${props.shade === "dark"
          ? Colors.Black3b3b3cbb
          : Colors.Whitefafafabb};
      }
    }

    ${props.shade === "light" &&
    css`
      & path {
        stroke: ${Colors.Black3b3b3c} !important;
      }
    `}
  `}
`;

const S = { Carousel, Slides, Slide, Navigation, Pages, Page, Buttons, Button };

export default S;
