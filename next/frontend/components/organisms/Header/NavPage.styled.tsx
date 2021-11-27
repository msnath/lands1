import { Colors } from "@/styles/app.styled";
import styled, { css } from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  z-index: 5;
  bottom: 0;
  transform: translateY(100%);
  background: ${Colors.Black101010};
  width: 100%;
  height: calc(100vh - 3.75rem);
`;

type BodyProps = { position: number };

const Body = styled.nav<BodyProps>`
  ${(props) => css`
    width: 100%;
    height: 100%;
    transition: all 300ms ease;
    transform: translateX(calc(${props.position} * -100%));
  `}
`;

type ListItemProps = { white?: boolean; grey?: boolean; clickable?: boolean };

const ListItem = styled.li<ListItemProps>`
  ${(props) => css`
    &,
    & * {
      color: ${props.white
        ? Colors.White
        : props.grey
        ? Colors.Greybcc5d3
        : "auto"};
    }
    ${props.white &&
    css`
      &,
      & * {
        font-size: 1.125rem;
      }
    `}
    ${props.clickable &&
    css`
      cursor: pointer;
    `}
  `}
`;

const S = { Container, Body, ListItem };

export default S;
