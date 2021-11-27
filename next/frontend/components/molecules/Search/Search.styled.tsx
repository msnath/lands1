import { bluebutton, boxshadow, Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.75rem;
`;

type TabProps = { selected: boolean };

const Tab = styled.button<TabProps>`
  & > p {
    color: ${Colors.Grey8f8f90};
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.1875rem;
    margin-bottom: 1.5rem;
  }

  ${(props) =>
    props.selected &&
    css`
      & > p {
        color: ${Colors.White};

        &::after {
          content: "";
          position: absolute;
          bottom: -0.75rem;
          left: calc(50% - 0.75rem);
          width: 1.5rem;
          height: 0.25rem;
          border-radius: 0.25rem;
          background: ${Colors.White};
        }
      }
    `}
`;

const SimpleSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem 0rem;
  border-radius: 2.5rem;
  border: 2px solid ${Colors.Whitef0f0f0};
`;

const SimpleInput = styled.input`
  width: 100%;
  padding: 0.25rem 0.5rem;
`;

const SimpleButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;

  background: ${Colors.Blue};
  border-radius: 50%;
`;

type SearchProps = { maximized?: boolean };

const Search = styled.div<SearchProps>`
  background: #171a1c;
  display: grid;
  grid-template-columns: auto 0.5rem 1fr auto;
  column-gap: 0.5rem;
  align-items: center;
  ${(props) =>
    props.maximized
      ? css`
          padding: 0.25rem 0.25rem 0.25rem 1.5rem;
        `
      : css`
          padding: 0.125rem 0.125rem 0.125rem 1rem;
        `}
  border-radius: 3.75rem;
  border: 0.125rem solid ${Colors.Black23272b};
  margin: 0.5rem 0rem;
  width: 100%;
`;

const Level = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 0.5rem;
  align-items: center;
  min-width: max-content;
  cursor: pointer;
  overflow: visible;

  p {
    font-size: 0.75rem;
    color: ${Colors.Grey8f8f90};
    white-space: nowrap;
  }
`;

const LevelDropdown = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  width: min(calc(100% - 1rem), 25rem);
  height: max-content;
  max-height: calc(100% - 1rem);
  background: ${Colors.Black1a1a1a};
  border-radius: 1.25rem;
  padding: 0rem 0.25rem;
  ${boxshadow}
  z-index: 15;

  & * {
    color: ${Colors.White} !important;
  }

  @media only screen and (min-width: 48rem) {
    position: absolute;

    top: calc(100% + 1.25rem);
    left: -1.5rem;
    transform: none;

    transform: none;
    width: max-content;
    height: max-content;
    max-height: unset;
  }
`;

const Separator = styled.div`
  width: 0.125rem;
  height: 1.5rem;
  background: ${Colors.Black23272b};
  border-radius: 0.125rem;
  white-space: nowrap;
`;

const Input = styled.input`
  &,
  &::placeholder {
    width: 100%;
    font-size: 0.875rem;
    font-family: Montserrat;
    color: ${Colors.Greybcc5d3};
    white-space: nowrap;
  }
`;

type ButtonProps = { padding?: boolean };

const Button = styled.button<ButtonProps>`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  max-width: 2rem;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  padding: 0.375rem;
  background: ${Colors.Blue};
  border-radius: 3rem;
  border: 0.125rem solid ${Colors.Black23272b};

  ${bluebutton};

  ${({ padding }) =>
    padding &&
    css`
      padding-left: 0.5rem;
      padding-right: 0.75rem;
    `};
`;

const SearchMaximized = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${Input} {
    color: ${Colors.White};
  }
  ${Input}::placeholder {
    color: ${Colors.Grey8f8f90};
  }
  ${Button} {
    width: max-content;
    height: max-content;
    max-width: unset;
    justify-content: space-evenly;
    & > p {
      color: ${Colors.White};
      font-family: Montserrat;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.125rem;
    }
    & > p:nth-child(2) {
      margin-left: 0.5rem;
    }
  }
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const ResultsContainer = styled.div`
  position: absolute;
  left: -1.5rem;
  top: 100%;
  width: calc(100% + 3rem);
  padding: 1rem;
  border-radius: 1.25rem;
  background: ${Colors.Black1a1a1a};
  z-index: 1;

  & > p {
    color: ${Colors.White};
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    padding: 0.5rem 1rem 1rem 1rem;
  }

  @media only screen and (min-width: 48rem) {
    left: 0;
    width: 100%;
  }
`;

const Results = styled.div`
  width: 100%;
  max-height: min(20rem, 75vh);
  padding: 1rem;
  overflow: auto;
`;

const Suggestions = styled.div`
  height: max-content;
  margin-top: 1rem;
  & > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 1rem;
    & > li {
      color: ${Colors.Greybcc5d3};
      font-family: Montserrat;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.125rem;
    }
    & > li:nth-child(1) {
      color: ${Colors.White};
    }
  }
`;

const S = {
  Tabs,
  Tab,
  SimpleSearch,
  SimpleButton,
  SimpleInput,
  Search,
  Level,
  LevelDropdown,
  Separator,
  Input,
  Button,
  SearchMaximized,
  SearchContainer,
  ResultsContainer,
  Results,
  Suggestions,
};

export default S;
