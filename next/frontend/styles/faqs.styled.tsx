import SvgElem from "@/components/atoms/SvgElem/SvgElem";
import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

const Title = styled.h1`
  margin-bottom: 4rem;

  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 4rem;
  font-weight: 700;
  line-height: 6rem;
  text-align: left;
`;

const FAQs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 5rem;

  & > * + * {
    margin: 0 0 0 3rem;
  }
  @media only screen and (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin: 1.5rem 0 0 0;
  }
`;

type AccordianProps = { open: boolean };

const Accordian = styled.div<AccordianProps>`
  ${(props) => css`
    background: ${props.open ? Colors.Black3b3b3c : Colors.Black23272b};
    border-radius: 1.25rem;
    transition: all 300ms ease;
  `}
`;

const Header = styled.button`
  display: flex;
  flex-direction: row;
  width: calc(100% - 1.5rem);
  padding: 1.75rem 2.5rem 1.75rem 1.75rem;

  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: left;
`;

const Icon = styled(SvgElem)`
  content: "";
  position: absolute;
  top: 50%;
  right: 0rem;
  transform: translateY(-50%);
  z-index: 1;
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

const Answer = styled.p`
  color: ${Colors.White};
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.625rem;
`;

const Protip = styled.p`
  color: ${Colors.Grey8f8f90};
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.625rem;
`;

const S = {
  Title,
  FAQs,
  Column,
  Accordian,
  Header,
  Icon,
  Content,
  Answer,
  Protip,
};

export default S;
