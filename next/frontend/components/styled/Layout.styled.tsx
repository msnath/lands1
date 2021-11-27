import { padding } from "@/styles/app.styled";
import styled, { css } from "styled-components";

type WideProps = { background?: string };

const Wide = styled.div<WideProps>`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  align-self: center;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

type CenteredProps = { maxWidth?: number; padding?: boolean };

const Centered = styled.div<CenteredProps>`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth ?? 1440}px;
  align-self: center;
  display: flex;
  flex-direction: column;

  ${(props) => props.padding && padding.both}
`;

const Layout = { Wide, Centered };

export default Layout;
