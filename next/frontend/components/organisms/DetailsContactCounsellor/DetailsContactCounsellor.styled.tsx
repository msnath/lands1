import { bluebutton, Colors, padding } from "@/styles/app.styled";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 4rem 0rem;
  ${padding.hori};
`;

const Card = styled.div`
  ${padding.both};
  background: ${Colors.White};
  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;

  @media only screen and (min-width: 48rem) {
    width: 100%;
    max-width: 50rem;
    flex-direction: row;
  }
`;

const Image = styled.div`
  max-width: 22.5rem;
`;

const Body = styled.div`
  display: grid;
  row-gap: 0.25rem;
  justify-content: center;

  & > p:nth-child(1) {
    color: ${Colors.Grey8f8f90};
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    text-align: center;
  }
  & > p:nth-child(2) {
    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2.625rem;
    text-align: center;
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: grid;
  column-gap: 1.5rem;
  align-items: center;
  justify-content: space-between;

  background: ${Colors.Blue};
  border-radius: 0.625rem;
  padding: 1rem 2.5rem;
  margin-top: 0.5rem;

  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-align: center;

  ${bluebutton};
`;

const S = { Container, Card, Image, Body, Button };

export default S;
