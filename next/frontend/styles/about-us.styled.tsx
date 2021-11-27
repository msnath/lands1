import ImgElem from "@/components/atoms/ImgElem/ImgElem";
import SvgElem from "@/components/atoms/SvgElem/SvgElem";
import styled from "styled-components";
import { Colors, hover, padding } from "./app.styled";

const Title = styled.h2`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  margin: 5rem 0rem;

  & > span {
    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
  }

  @media only screen and (min-width: 48rem) {
    font-size: 2.25rem;
  }
`;

const TitleBar = styled.div`
  width: 100%;
  height: 0.25rem;
  max-width: 11rem;
  background: ${Colors.Blue};
  border-radius: 0.25rem;
  margin-left: 1.5rem;

  @media only screen and (min-width: 48rem) {
    margin-left: 4rem;
  }
`;

type BackgroundProps = { height: number };

const Background = styled(SvgElem)<BackgroundProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${(props) => props.height}px;
`;

const Header = styled.header`
  margin-top: 7rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  ${padding.both};


  @media only screen and (min-width: 48rem) {
    margin-top: 2.5rem;
    flex-direction: row;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    align-items: center;
  }
`;

const Texts = styled.div`
  & > h1 {
    color: ${Colors.White};
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    margin-left: 3rem;
    @media only screen and (min-width: 48rem) {
      font-size: 2.25rem;
    }
  }
`;

const TextHeyThere = styled(SvgElem)`
  position: absolute;
  top: -3.75rem;
  left: -3rem;
`;

const Description = styled.div`
  margin-top: 2.25rem;
  margin-left: 1.5rem;

  & > div {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 97.5%;
    height: 100%;
    background: ${Colors.Blue};
    border-radius: 1.25rem;
    transform: translate(-50%, 0) rotateZ(3.75deg);
    @media only screen and (min-width: 48rem) {
      width: 102.5%;
      height: 110%;
      transform: translate(calc(-50% - 0.5rem), 0.5rem) rotateZ(3.75deg);
    }
  }
  & > p {
    background: ${Colors.White};
    padding: 1.5rem;
    border-radius: 1.25rem;

    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: left;
    @media only screen and (min-width: 48rem) {
      font-size: 1.125rem;
    }
  }
`;

const Illustration = styled(ImgElem)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.section`
  ${padding.hori};
  padding-bottom: 3rem;
`;

const TextSoFar = styled(SvgElem)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(75%, 75%);
`;

const TextSsshhhh = styled(SvgElem)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-0.75rem, -70%);
  @media only screen and (min-width: 80rem) {
    transform: translate(-50%, -60%);
  }
`;

const Journey = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.75rem;

  @media only screen and (min-width: 48rem) {
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 4.75rem;
      right: calc(2.5rem + 1rem);
      width: calc((100% - (2 * 1.5rem) - (1rem)) * 5 / 6);
      height: 0.375rem;
      background: blue;
      height: 0.375rem;
      background: #dbdfe7;
      opacity: 0.5;
      border-radius: 0.5rem;
      z-index: -1;
    }
  }
`;

const Milestone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:not(&:nth-child(1))::before {
    content: "";
    width: 0.375rem;
    height: 2.25rem;
    background: #dbdfe7;
    opacity: 0.5;
    border-radius: 0.5rem;
    margin: 1rem 0rem;

    @media only screen and (min-width: 48rem) {
      display: none;
    }
  }
`;

const Year = styled.h3`
  width: max-content;
  padding: 0.5rem 2.75rem;
  background: #004273;
  border-radius: 3.75rem;

  color: ${Colors.White};
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    transform: translate(-50%, 100%);

    width: 0.375rem;
    height: 0.75rem;
    background: #dbdfe7;
    opacity: 0.5;
    border-radius: 0.5rem;
    margin-top: 0.25rem;
  }

  @media only screen and (min-width: 48rem) {
    margin-bottom: 4rem;
    &::after {
      bottom: -2rem;
      height: 3rem;
      margin: 1rem 0;
    }
  }
`;

const Month = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.375rem;
  width: 100%;
  padding: 1rem;
  padding-bottom: 0;

  & > p:nth-child(1) {
    font-weight: 500;
    line-height: 120%;
    color: #bcc5d3;
    padding-left: 0.5rem;
  }

  & > p:nth-child(2) {
    font-weight: 600;
    line-height: 150%;
    color: #3b3b3c;

    padding: 1.5rem;
    box-sizing: border-box;
    background: #f5f8fe;
    border-radius: 1.25rem;
  }

  @media only screen and (min-width: 48rem) {
    margin-bottom: 2.5rem;
  }

  &:not(&:nth-child(1)):not(&:nth-child(2))::after {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translate(-50%, 100%);

    width: 0.375rem;
    height: 0.75rem;
    background: #dbdfe7;
    opacity: 0.5;
    border-radius: 0.5rem;
    margin-top: 0.25rem;

    @media only screen and (min-width: 48rem) {
      top: -3.75rem;
      height: 1.5rem;
      margin: 0.5rem 0;
    }
  }
`;

const Articles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  row-gap: 0.75rem;
  margin-bottom: 5rem;

  & > a * {
    width: 100%;
  }
  & > a > div > div {
    ${hover};
  }
  @media only screen and (min-width: 22.5rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 48rem) {
    column-gap: 1.5rem;
    row-gap: 2.25rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const S = {
  Title,
  TitleBar,

  Background,
  Header,
  Texts,
  TextHeyThere,
  Description,
  Illustration,

  Container,
  TextSoFar,
  TextSsshhhh,

  Journey,
  Milestone,
  Year,
  Month,

  Articles,
};

export default S;
