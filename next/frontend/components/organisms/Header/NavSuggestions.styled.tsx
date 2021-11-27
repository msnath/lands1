import { Colors } from "@/styles/app.styled";
import styled from "styled-components";

const Suggestions = styled.div`
  position: absolute;
  top: calc(100% + 1.25rem);
  right: 0;
  width: 90vw;
  height: max-content;
  max-width: 54rem;
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 1.25rem;
  overflow: hidden;
  z-index: 5;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - 0.5rem);
    left: 50%;
    width: 200%;
    height: 5rem;
    background: ${Colors.Blue};
    transform: translateX(-50%) rotate(-2deg);
  }
`;

const Title = styled.h3`
  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.25rem;
    width: 100%;
    height: 0.125rem;
    border-radius: 0.125rem;
    background: ${Colors.Greybcc5d3};
  }
`;

const LeftTop = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const LeftBot = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
`;

const Right = styled.div`
  grid-row: 1/3;
  grid-column: 2/3;
`;

const List = styled.ul`
  & > li {
    color: ${Colors.Grey8f8f90};
    font-family: Mulish;
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    margin: 0.5rem 0rem;
    cursor: pointer;
    transition: all 300ms ease;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${Colors.White};
      }
    }
  }
`;

const S = { Suggestions, Title, LeftTop, LeftBot, Right, List };

export default S;
