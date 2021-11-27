import styled from "styled-components";
import { filterOptions, filterTitle } from "../algolia.styled";

const Radio = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Title = styled.p`
  ${filterTitle};
`;
const Options = styled.ul`
  ${filterOptions};
`;

const S = { Radio, Title, Options };

export default S;
