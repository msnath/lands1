import { bool } from "$/types/style.type";
import { bluebutton, Colors } from "@/styles/app.styled";
import styled from "styled-components";

const Card = styled.li`
  display: grid;
  grid-template-rows: 1fr auto auto;
  height: 100%;
  max-width: 25rem;
  background: ${Colors.White};
  padding: 1rem;

  border: 0.25rem solid ${Colors.Whitef0f0f0};
  border-radius: 1.25rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 5rem;
    right: 0;
    width: 5rem;
    height: 5rem;
    transform: translate(50%, 0);
    border: 1rem solid ${Colors.Greye6eaef};
    border-radius: 50%;
  }
`;

const Title = styled.p`
  color: ${Colors.Black3b3b3c};
  font-family: Montserrat;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0.5rem;
  row-gap: 1rem;

  margin-top: 2.75rem;

  @media only screen and (min-width: 24rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Box = styled.div`
  & > p:nth-child(1) {
    color: ${Colors.Grey6c6c6d};
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    text-align: left;
  }
  & > p:nth-child(2) {
    color: ${Colors.Black3b3b3c};
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: center;

    display: block;
    background: ${Colors.Greyf3f5f7};
    border-radius: 0.625rem;
    margin-top: 0.625rem;
    padding: 1rem 0.5rem;
  }
`;

type PromotionProps = { empty: bool };

const Promotion = styled.div<PromotionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => (props.empty ? Colors.White : Colors.Greyf3f5f7)};
  border-radius: 0.625rem;
  margin-top: 0.625rem;
  padding: 0.5rem 1rem;
  min-height: 3.5rem;

  & > p {
    color: ${Colors.Blue};
    font-family: Mulish;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.125rem;
    text-align: left;
  }

  @media only screen and (min-width: 24rem) {
    grid-column: 1/3;
  }
`;

const Button = styled.a`
  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-align: center;

  background: ${Colors.Blue};
  border-radius: 0.625rem;
  margin-top: 0.625rem;
  padding: 1rem;

  ${bluebutton};

  @media only screen and (min-width: 24rem) {
    grid-column: 1/3;
  }
`;

const S = { Card, Title, Grid, Box, Promotion, Button };

export default S;
