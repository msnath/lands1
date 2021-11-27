import { boxshadow, Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type FilterDropdownModalProps = {
  top: number;
};

const FilterDropdownModal = styled.div<FilterDropdownModalProps>`
  ${(props) => css`
    position: fixed;

    top: calc(50% + ${props.top}px);
    left: 50%;
    transform: translate(-50%, calc(-50% - ${props.top / 2}px));

    display: flex;
    flex-direction: column;
    width: min(calc(100% - 1rem), 25rem);
    height: calc(100% - ${props.top}px - 1rem);
    max-height: 30rem;
    background: ${Colors.White};
    border-radius: 1.25rem;
    padding: 0rem 0.25rem;

    z-index: 1;
   
    ${boxshadow};
  `}

  @media only screen and (min-width: 80rem) {
    position: absolute;
    top: unset;
    left: unset;
    bottom: -1rem;
    transform: translateY(100%);
    width: 20rem;
    height: auto;
    max-height: min(30rem, 50vh);
  }
`;

const S = { FilterDropdownModal };

export default S;
