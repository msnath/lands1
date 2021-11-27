import { textoverflow } from "@/styles/app.styled";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 1rem;
  align-items: center;

  background: var(--grey-lightest);
  padding: 0.25rem;
  border-radius: 0.625rem;
  border: 2px solid var(--white-light);

  color: var(--black-light);
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;

  & > p {
    color: var(--black-light);
    font-family: Mulish;
    font-size: 1rem;
    font-weight: 700;
    text-align: left;

    ${textoverflow(2)}
  }
`;

const Icon = styled.div`
  background: var(--white-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.625rem;
`;

const Arrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

const Description = styled.p`
  margin-top: 1.5rem;
  padding: 0rem 0.25rem;

  color: var(--blue);
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;

  ${textoverflow(2)}
`;

const S = { Card, Icon, Arrow, Description };

export default S;
