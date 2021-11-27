import styled, { css } from "styled-components";

type ULProps = { separator?: boolean };

const UL = styled.ul<ULProps>`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;

  ${(props) =>
    props.separator &&
    css`
      & > *:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
      }
    `}
`;

const S = { UL };

export default S;
