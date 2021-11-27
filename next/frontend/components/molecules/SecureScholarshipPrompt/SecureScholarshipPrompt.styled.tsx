import { bluebutton, boxshadow, Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type PromptProps = { visible: boolean };

const Prompt = styled.div<PromptProps>`
  position: sticky;
  bottom: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: max-content;
  padding: 0.5rem;
  background: ${Colors.White};
  filter: drop-shadow(0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.1));

  transition: all 300ms ease;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: calc(100vw - var(--scrollbar-width));
    height: 100%;
    background: ${Colors.White};
    transform: translateX(-50%);
  }

  ${(props) =>
    props.visible
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(100%);
        `}

  & > div {
    display: grid;
    align-items: center;
    column-gap: 0rem;
    row-gap: 0.5rem;
    width: 100%;
  }

  @media only screen and (min-width: 48rem) {
    & > div {
      grid-template-columns: 1fr auto;
      column-gap: 1rem;
      row-gap: 0rem;
      max-width: 70rem;
      padding-right: min(calc(85rem - 100vw), 6rem);
    }
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "logo institute"
    "logo country";
  column-gap: 1rem;
  align-items: center;
`;

const Logo = styled.div`
  grid-area: logo;

  width: 3rem;
  height: 3rem;
  border-radius: 0.625rem;
  overflow: hidden;

  ${boxshadow};
`;

const Title = styled.p`
  grid-area: institute;

  color: ${Colors.Black3b3b3c};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
`;

const Text = styled.p`
  grid-area: country;

  color: ${Colors.Grey6c6c6d};
  font-family: Mulish;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
`;

const Button = styled.button`
  min-width: 100%;
  background: ${Colors.Blue};
  border-radius: 0.625rem;
  padding: 0.625rem 3rem;

  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-align: center;

  ${bluebutton}

  @media only screen and (min-width: 30rem) {
    /* min-width: 22.5rem; */
  }
`;

const S = { Prompt, Logo, Details, Title, Text, Button };

export default S;
