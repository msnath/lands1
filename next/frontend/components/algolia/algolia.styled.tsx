import { Colors } from "@/styles/app.styled";
import { css } from "styled-components";

export const filterTitle = css`
  grid-area: title;
  padding: 0.5rem 1.125rem;

  color: ${Colors.Black3b3b3c};
  font-size: 1rem;
  font-weight: 600;
  font-family: Montserrat;
  line-height: 1.5rem;
  text-align: left;
`;

export const filterClear = css`
  grid-area: clearall;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.125rem;
  text-align: right;
`;

export const filterOptions = css`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0.5rem 0.5rem;
  margin: 0.5rem 0rem;
  overflow: auto;
`;
