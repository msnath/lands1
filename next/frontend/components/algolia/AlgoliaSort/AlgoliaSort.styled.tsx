import { boxshadow, Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";
import { filterTitle } from "../algolia.styled";

type SortProps = { focused: boolean };

const Sort = styled.button<SortProps>`
  background: ${Colors.Greyf3f5f7};
  border: 2px solid ${Colors.Greyf3f5f7};
  border-radius: 0.625rem;
  padding: 0.5rem 0.75rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${Colors.Whitefafafa};
    }
  }

  ${({ focused }) =>
    focused &&
    css`
      background: ${Colors.Black3b3b3c};
      & p {
        color: ${Colors.White};
      }
      & path {
        stroke: ${Colors.White};
      }
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background: ${Colors.Black3b3b3c};
          & p {
            color: ${Colors.White};
          }
          & path {
            stroke: ${Colors.White};
          }
        }
      }
    `}

  @media only screen and (min-width: 36rem) {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    column-gap: 0.5rem;

    width: 16.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > svg > path {
    transition: none;
  }
`;

const Separator = styled.div`
  width: 0.125rem;
  height: 1.5rem;
  border-radius: 1rem;
  background: ${Colors.Greye6eaef};
`;

const Text = styled.p`
  color: ${Colors.Black3b3b3c};
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.125rem;
  text-align: left;
`;

const Options = styled.div`
  width: 90%;
  max-width: 20rem;
  background: var(--white);
  padding: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 1.25rem;

  @media only screen and (min-width: 80rem) {
    position: absolute;
    top: auto;
    left: auto;
    bottom: -1rem;
    transform: translateY(100%);
    z-index: 1;
    ${boxshadow};
  }
`;

const Title = styled.p`
  ${filterTitle}
`;

const S = { Sort, Icon, Separator, Text, Options, Title };

export default S;
