import SvgElem from "@/components/atoms/SvgElem/SvgElem";
import {
  bluebutton,
  boxshadow,
  Colors,
  hover,
  textoverflow,
} from "@/styles/app.styled";
import styled from "styled-components";

const colorDefault = Colors.Greye6eaef;
const colorHover = Colors.Greybcc5d3;
const colorClick = Colors.Blue;

const Card = styled.li`
  width: 100%;
  max-width: 22.5rem;
  background: ${Colors.White};
  border: 0.25rem solid ${colorDefault};
  border-radius: 1.25rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${hover};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${colorHover};
    }
  }
  &:active {
    border-color: ${colorClick};
  }
`;

const Images = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
    background: linear-gradient(90deg, #394255 0%, rgba(27, 24, 55, 0) 58.65%);
    overflow: hidden;
    z-index: 1;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0rem 0rem;
  overflow: hidden;
`;

const Logo = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 2.75rem;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.25rem;
  box-shadow: 0rem 0.125rem 0.25rem 0.0625rem rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 2;
`;

const Wave = styled(SvgElem)`
  width: 100%;
  transform: translateY(-52.5%);
  & > path {
    fill: ${colorDefault};
  }
  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover & > path {
      fill: ${colorHover};
    }
  }
  ${Card}:active & > path {
    fill: ${colorClick};
  }
`;

const QS = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & > * + * {
    margin: 0 0 0 0.5rem;
  }

  padding: 0.25rem 0.75rem;
  background: ${Colors.White};
  border-radius: 1.5rem;
  ${boxshadow};

  & > p {
    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: left;
  }
`;

const Body = styled.div`
  padding: 0.5rem 1rem;
  max-width: 22rem;

  & > p:nth-child(1) {
    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.1875rem;
    letter-spacing: 0em;
    z-index: 1;

    height: 2.375rem;
    ${textoverflow(2)};
  }
  & > p:nth-child(2) {
    color: ${Colors.Black3b3b3c};
    font-family: Mulish;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.1875rem;
    letter-spacing: 0.02rem;
    margin-top: 0.5rem;
    z-index: 1;

    height: 2.375rem;
    ${textoverflow(2)};
  }
  & > p:nth-child(3) {
    color: ${Colors.Grey8f8f90};
    font-family: Mulish;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    margin: 0.5rem 0rem;
    z-index: 1;

    height: 1.75rem;
    ${textoverflow(1)};
  }
  & > p:nth-child(4),
  & > p:nth-child(5) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: max-content;
    align-items: center;
    justify-content: space-between;

    color: #6c6c6d;
    font-family: Mulish;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.3125rem;
    letter-spacing: 0.02rem;
    z-index: 1;

    margin-bottom: 0.25rem;

    & > span {
      display: block;
      width: 50%;
      background: ${Colors.Greyf3f5f7};
      padding: 0.75rem 1.875rem;
      border-radius: 0.625rem;
      border: 2px solid ${Colors.Whitefafafa};

      color: ${Colors.Black3b3b3c};
      text-align: center;
    }
  }
`;

const Scholarships = styled.div`
  height: 100%;
  padding: 0rem 1rem 1.5rem 1rem;
`;

const Buttons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 0.5rem;
  padding: 0rem 1rem 1.5rem 1rem;

  a:nth-child(1) {
    background: ${Colors.Blue};
    border-radius: 0.625rem;
    padding: 0.625rem;

    color: ${Colors.White};
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: center;

    ${bluebutton};
  }

  a:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    background: ${Colors.White};
    border: 0.125rem solid ${Colors.Greydbdfe7};
    border-radius: 0.625rem;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: ${Colors.Greydbdfe7};
      }
    }
    &:active {
      background: ${Colors.Black3b3b3c};
      & > svg > path {
        stroke: ${Colors.White};
      }
    }
  }
`;

const S = { Card, Images, Banner, Logo, QS, Wave, Body, Scholarships, Buttons };

export default S;
