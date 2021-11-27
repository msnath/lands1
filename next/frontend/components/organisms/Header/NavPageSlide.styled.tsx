import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type SlideProps = {
  offset: 0 | 1 | 2;
  current: boolean;
  hasOnBack: boolean;
};

const Slide = styled.ul<SlideProps>`
  position: absolute;
  left: ${(props) => props.offset * 100}%;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 1rem;
  background: ${Colors.Black101010};
  transition: all 300ms ease;

  ${(props) =>
    props.current &&
    css`
      z-index: 1;
    `}

  & ul {
    display: grid;
    align-content: flex-start;
  }

  & li {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 1rem;
    padding-top: 1.25rem;
    padding-bottom: 1rem;
  }

  ${(props) =>
    props.hasOnBack
      ? css`
          & li:not(:nth-child(1))::after,
          & li:not(:nth-child(1)):not(:nth-child(2))::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0rem;
            width: 100%;
            height: 0.125rem;
            background: ${Colors.Black23272b};
            border-radius: 0.125rem;
          }
        `
      : css`
          & li::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0rem;
            width: 100%;
            height: 0.125rem;
            background: ${Colors.Black23272b};
            border-radius: 0.125rem;
          }
        `}
`;

const Back = styled.button`
  display: flex;
  flex-direction: row;
  height: 2rem;

  & > * + * {
    margin: 0 0 0 0.5rem;
  }
  & > p {
    color: ${Colors.Greybcc5d3};
    font-size: 0.875rem;
    font-family: Mulish;
    line-height: 1rem;
  }
`;

const List = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

const S = { Slide, Back, List };

export default S;
