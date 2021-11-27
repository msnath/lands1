import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

const Accordian = styled.div`
  background: ${Colors.White};
  border-radius: 1.25rem;
  transition: all 300ms ease;
`;

type AccordianProps = { open: boolean };

const Header = styled.button<AccordianProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1.75rem;

  color: ${(props) => (props.open ? Colors.Black3b3b3c : Colors.Grey6c6c6d)};
  font-family: Montserrat;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

const Icon = styled.button<AccordianProps>`
  ${(props) => css`
    content: "";
    position: absolute;
    top: 2.875rem;
    right: 2.5rem;
    transform: translate(50%, -50%);
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 2.75rem;
    transition: all 300ms ease;
    z-index: 1;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: ${Colors.BlueLighterSemi};
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 1rem;
      height: 0.1875rem;
      border-radius: 1rem;
      background: ${Colors.BlueLighter};
      transition: all 300ms ease;
      ${props.open &&
      css`
        transform: translate(50%, -50%) rotateZ(90deg);
        background: transparent;
      `}
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 0.1875rem;
      height: 1rem;
      border-radius: 1rem;
      background: ${props.open ? Colors.Black3b3b3c : Colors.BlueLighter};
      transition: all 300ms ease;
      ${props.open &&
      css`
        transform: translate(50%, -50%) rotateZ(90deg);
      `}
    }
  `}
`;

type ContentProps = { open: boolean; height: number };

const Content = styled.div<ContentProps>`
  ${(props) => css`
    overflow: hidden;
    padding: ${props.open ? "0rem 1.5rem 1.5rem 1.5rem" : "0 1.5rem"};
    max-height: ${props.open ? (props.height ?? 0) + 24 + "px" : 0};
    transition: all 300ms ease;
  `}
`;

const S = { Accordian, Header, Icon, Content };

export default S;
