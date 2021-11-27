import { Colors, padding } from "@/styles/app.styled";
import styled from "styled-components";

const Container = styled.div`
  ${padding.hori}
`;

const Card = styled.div`
  background: ${Colors.White};
  border-radius: 1.25rem;
  ${padding.both};

  & > p::nth-child(1) {
    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: 600;
    text-align: left;
  }
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  align-items: center;
  margin: 1rem 0rem;

  @media only screen and (min-width: 30rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 48rem) {
    grid-template-columns: auto auto 1fr;
  }
`;

const Search = styled.div`
  grid-column: auto;
  @media only screen and (min-width: 30rem) {
    grid-column: 1/3;
  }
  @media only screen and (min-width: 48rem) {
    grid-column: auto;
  }
`;

const Results = styled.div`
  min-height: 5rem;
  background: ${Colors.Greyf3f5f7};
  padding: 1rem;
  border-radius: 1.25rem;
`;

const ViewAll = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 0.75rem;
  align-items: center;
  width: max-content;

  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-left: auto;

  color: ${Colors.Blue};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.125rem;
  text-align: right;
`;

const S = { Container, Card, Filters, Search, Results, ViewAll };

export default S;
