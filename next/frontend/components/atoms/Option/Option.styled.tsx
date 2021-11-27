import { Colors } from "@/styles/app.styled";
import styled from "styled-components";
const Option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;

  color: ${Colors.Black3b3b3c};
  font-family: Mulish;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.125rem;
  text-align: left;

  & > div {
    margin-right: 1rem;
    min-width: 1.25rem;
    width: 1.25rem;
    max-width: 1.25rem;

    color: ${Colors.Black3b3b3c};
    font-family: Mulish;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
    text-align: left;
  }
`;

const S = { Option };

export default S;
