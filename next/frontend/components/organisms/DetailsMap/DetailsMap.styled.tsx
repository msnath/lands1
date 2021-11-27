import { Colors, padding } from "@/styles/app.styled";
import styled from "styled-components";

const Container = styled.div`
  ${padding.hori};
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 5rem;
  row-gap: 2rem;

  ${padding.both};
  border-radius: 1.25rem;
  background: ${Colors.White};

  @media only screen and (min-width: 64rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Address = styled.h3`
  color: ${Colors.Black3b3b3c};
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2.25rem;
  text-align: left;
  align-self: center;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 20rem;
  border: none;
  border-radius: 1.25rem;
`;

const S = { Container, Card, Address, Map };

export default S;
