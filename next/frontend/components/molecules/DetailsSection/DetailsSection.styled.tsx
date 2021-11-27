import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type SectionProps = { top: number };

const Section = styled.section<SectionProps>`
  ${(props) => css`
    margin-top: ${props.top}px;
  `}
`;

const Title = styled.h2`
  color: #1e2833;
  font-family: Montserrat;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    height: 0.25rem;
    width: 5.25rem;
    border-radius: 0.25rem;
    background: ${Colors.Blue};
  }

  @media only screen and (min-width: 48rem) {
    font-size: 2.5rem;
  }
`;

const S = { Section, Title };

export default S;
