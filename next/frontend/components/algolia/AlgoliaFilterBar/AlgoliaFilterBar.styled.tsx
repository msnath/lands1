import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type FilterBarProps = { top: number; sticking: boolean };

const FilterBar = styled.section<FilterBarProps>`
  position: sticky;
  top: ${(props: FilterBarProps) => props.top}px;
  padding: 0rem 1.5rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.25rem;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    transition: all 300ms ease;
  }

  ${(props: FilterBarProps) =>
    props.sticking &&
    css`
      &::before {
        background: ${Colors.White};
        border-radius: 0rem;
        box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
      }
    `}
`;

const MobileBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  width: 100%;

  background: ${Colors.White};
  padding: 0.625rem;
  border-radius: 1.25rem;
  z-index: 1;
`;

const MobileCloseButton = styled.button`
  padding: 1rem 1.5rem 0.5rem 1.5rem;
  align-self: flex-end;
  margin-left: calc(100% - 1.5rem - 3rem);
`;

type FacetsContainerProps = {
  top: number;
  opacity: number;
  hasPointerEvents: boolean;
};

const FacetsContainer = styled.div<FacetsContainerProps>`
  ${(props: FacetsContainerProps) => css`
    position: fixed;
    left: 0;
    top: ${props.top}px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - ${props.top}px);
    opacity: ${props.opacity};
    pointer-events: ${props.hasPointerEvents ? "all" : "none"};
    z-index: 1;

    background: ${Colors.White};

    @media only screen and (min-width: 48rem) {
      all: unset;
      background: ${Colors.White};
      border-radius: 1.25rem;
    }
  `}
`;

const Facets = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.75rem;
  width: 100%;
  padding: 0.5rem;
  overflow: auto;

  @media only screen and (min-width: 48rem) {
    display: flex;
    flex-flow: row wrap;
    width: auto;
    overflow: unset;
    padding: 0.25rem;
    row-gap: 0;

    & > * {
      margin: 0.5rem;
    }
  }
`;

const S = { FilterBar, MobileBar, MobileCloseButton, FacetsContainer, Facets };

export default S;
