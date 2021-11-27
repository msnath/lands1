import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease;
  z-index: 10;
`;

const HeaderMain = styled.div`
  align-self: center;
  width: 100%;
  min-height: 3.75rem;
  height: 3.75rem;
  max-width: 80rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0rem 1rem;

  & > a,
  & > a > div {
    width: max-content;
  }

  @media only screen and (min-width: 48rem) {
    grid-template-columns: auto 1fr auto;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Logo = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  max-width: 20rem;
  max-height: 3rem;
  padding: 0.375rem 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & > a {
    height: 100%;
    max-height: 100%;
  }

  & > a > svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  justify-content: flex-end;

  & > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0rem 1.25rem;
  }
  & > div > div > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

type LinkProps = { hovering: boolean };

const Link = styled.a<LinkProps>`
  & > p {
    color: ${Colors.White};
    font-size: 1rem;
    font-family: Montserrat;
    font-weight: 600;
    transition: all 300ms ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: calc(100% + 0.25rem);
      width: 100%;
      height: 0.125rem;
      border-radius: 0.125rem;
      background: transparent;
      transition: all 300ms ease;

      ${(props) =>
        props.hovering &&
        css`
          background: ${Colors.Blue};
        `};

      &:hover {
        @media (hover: hover) and (pointer: fine) {
          background: ${Colors.Blue};
        }
      }
    }
  }
`;

type SearchProps = { visible: boolean };

const Search = styled.div<SearchProps>`
  margin: 0rem 0.5rem;
  height: 0;
  opacity: 0;
  transform: scale(0, 0);
  pointer-events: none;
  transition: all 300ms ease;

  ${(props) =>
    props.visible &&
    css`
      height: auto;
      opacity: 1;
      transform: none;
      pointer-events: all;
    `}
`;

const SearchComplex = styled.div<SearchProps>`
  height: 0;
  opacity: 0;
  transform: scale(0, 0);
  pointer-events: none;
  transition: all 300ms ease;

  ${(props) =>
    props.visible &&
    css`
      padding: 0rem 1.5rem 1.5rem 1.5rem;
      height: auto;
      opacity: 1;
      transform: none;
      pointer-events: all;
    `}
`;

const S = { Header, HeaderMain, Logo, Nav, Link, Search, SearchComplex };

export default S;
