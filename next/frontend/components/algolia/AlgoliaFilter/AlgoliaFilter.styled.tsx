import SvgElem from "@/components/atoms/SvgElem/SvgElem";
import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type FilterProps = { focused: boolean; using: boolean };

type FiltersProps = { using: boolean };

const Filter = styled.button<FilterProps>`
  min-width: 9.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;

  column-gap: 0.5rem;
  background: ${Colors.White};
  border: 0.125rem solid #f0f0f0;
  border-radius: 0.625rem;
  padding: 0.75rem 1.5rem 0.75rem 0.75rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${Colors.Greydbdfe7};
      & p {
        color: ${Colors.White};
      }
      & path {
        fill: ${Colors.White};
      }
    }
  }

  ${({ using }) =>
    using &&
    css`
      background: ${Colors.Greyf3f5f7};
      border: 0.125rem solid ${Colors.Greyf3f5f7};
      ${Text} {
        color: ${Colors.Black3b3b3c};
      }
      & path {
        fill: ${Colors.White};
      }
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${Colors.Black3b3b3c};
          ${Text} {
            color: ${Colors.White};
          }
          & path {
            fill: ${Colors.White};
          }
        }
      }
    `}

  ${({ focused }) =>
    focused &&
    css`
      background: ${Colors.Black3b3b3c};
      ${Text} {
        color: ${Colors.White};
      }
      & path {
        fill: ${Colors.White};
      }
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${Colors.Black3b3b3c};
          ${Text} {
            color: ${Colors.White};
          }
          & path {
            fill: ${Colors.White};
          }
        }
      }
    `}

  @media only screen and (min-width: 48rem) {
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
`;

const Filters = styled.button<FiltersProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 2rem auto 1fr;
  align-items: center;

  column-gap: 0.5rem;
  background: ${Colors.White};
  border: 2px solid #f0f0f0;
  border-radius: 0.625rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;

  ${({ using }) =>
    using &&
    css`
      background: ${Colors.Greyf3f5f7};
      border: none;

      ${Text} {
        color: ${Colors.Black3b3b3c};
      }
    `}
`;

const Indicator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > svg > path {
    transition: none;
  }
`;

const SvgUsing = styled(SvgElem)`
  width: 1.25rem;
  height: 1.25rem;
  background: ${Colors.Blue};
  border-radius: 0.25rem;
  padding: 0.125rem;
  & > path {
    fill: ${Colors.White};
  }
`;

const SvgUsingFilters = styled(SvgElem)`
  width: 1.5rem;
  height: 1.5rem;
  background: ${Colors.Blue};
  border-radius: 0.25rem;
  padding: 0.25rem;
  & > path {
    fill: ${Colors.Blue};
    stroke: ${Colors.White};
  }
`;

const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  background: ${Colors.Blue};
  border-radius: 0.25rem;
  color: ${Colors.White};
  font-size: 0.75rem;
`;

const Separator = styled.div`
  width: 0.125rem;
  height: 1.5rem;
  border-radius: 1rem;
  background: ${Colors.Greye6eaef};
`;

const Text = styled.p`
  color: ${Colors.Grey8f8f90};
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.125rem;
  text-align: left;
  padding: 0rem 0.5rem;
`;

const S = {
  Filter,
  Filters,
  Indicator,
  SvgUsing,
  SvgUsingFilters,
  Count,
  Separator,
  Text,
};

export default S;
