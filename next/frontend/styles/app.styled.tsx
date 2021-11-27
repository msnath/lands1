import { css } from "styled-components";

export const padding = {
  hori: css`
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    @media only screen and (min-width: 768px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media only screen and (min-width: 64rem) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  `,
  vert: css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    @media only screen and (min-width: 768px) {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    @media only screen and (min-width: 64rem) {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
  `,
  both: css`
    padding: 0.75rem;
    @media only screen and (min-width: 768px) {
      padding: 1rem;
    }
    @media only screen and (min-width: 64rem) {
      padding: 1.5rem;
    }
  `,
};

export const hover = css`
  transition: all 300ms ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-0.75rem);
    }
  }
`;

export const hoverp = css`
  transition: all 300ms ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-15%);
    }
  }
`;

export const boxshadow = css`
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const hoverdefault = css`
  transition: all 300ms ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    }
  }
`;

export const textoverflow = (lines: number) => css`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
`;

export const Colors = {
  Blue: "#0088e9",
  BlueSemi: "#0088e980",
  BlueHover: "#1FA2FF",
  BlueLight: "#47b3ff",
  BlueLighter: "#38A5F9",
  BlueLighterSemi: "#38A5F952",
  BlueDark: "#004273",
  Yellow: "#fdc830",

  White: "#ffffff",
  Whitefafafabb: "#fafafabb",
  Whitefafafa: "#fafafa",
  Whitef3f3f3: "#f3f3f3",
  Whitef0f0f0: "#f0f0f0",

  Greyf3f5f7: "#f3f5f7",
  Greyebebf0: "#ebebf0",
  Greye6eaef: "#e6eaef",
  Greye5e5e5: "#e5e5e5",
  Greydbdfe7: "#dbdfe7",
  Greyd9d9d9: "#d9d9d9",
  Greybcc5d3: "#bcc5d3",
  Grey8f8f90: "#8f8f90",
  Grey6c6c6d: "#6c6c6d",

  Black101010: "#101010",
  Black1a1a1a: "#1a1a1a",
  Black212631: "#212631",
  Black3b3b3c: "#3b3b3c",
  Black3b3b3cbb: "#3b3b3cbb",
  Black23272b: "#23272b",
  Black394255: "#394255",
  Black23272b80: "#23272b80",
};

export const bluebutton = css`
  transition: all 300ms ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${Colors.BlueHover};
    }
  }
  &:active {
    background: ${Colors.BlueDark};
  }
`;
