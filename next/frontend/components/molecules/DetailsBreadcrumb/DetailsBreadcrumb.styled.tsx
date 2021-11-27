import { Colors } from "@/styles/app.styled";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${Colors.Black1a1a1a};
`;

const Crumbs = styled.div`
  display: none;
  @media only screen and (min-width: 48rem) {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    max-width: 80rem;
    padding: 0.5rem 1.5rem;
    & > * {
      margin: 0rem 0.5rem;
    }
    & * {
      color: ${Colors.Grey8f8f90};
      transition: all 300ms ease;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: ${Colors.White};
        }
      }
    }
  }
`;

const S = { Container, Crumbs };

export default S;
