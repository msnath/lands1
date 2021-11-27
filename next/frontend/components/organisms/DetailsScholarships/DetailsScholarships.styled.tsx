import styled from "styled-components";

const Slide = styled.ul`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  padding: 1.5rem;

  @media only screen and (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const S = { Slide };

export default S;
