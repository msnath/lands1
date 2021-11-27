import SvgElem from "@/components/atoms/SvgElem/SvgElem";
import { Colors, hover } from "@/styles/app.styled";
import styled from "styled-components";

type ButtonProps = { opacity: number };

const Button = styled.button<ButtonProps>`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  transition: all 300ms ease;
  z-index: 5;
  opacity: ${(props) => props.opacity};

  ${hover};

  @media only screen and (min-width: 48rem) {
    bottom: 0rem;
    right: 1rem;
  }
  @media only screen and (min-width: 64rem) {
    bottom: 1rem;
  }
`;

const Arrow = styled(SvgElem)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;

  width: 3.5rem;
  height: 3.5rem;
  border: 0.25rem solid ${Colors.Grey6c6c6d};
  border-radius: 1.25rem;
  background: ${Colors.Black23272b};
`;

const Text = styled.p`
  margin-top: 0.25rem;

  color: ${Colors.Black3b3b3c};
  font-family: Mulish;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
  text-align: center;
`;

const S = { Button, Arrow, Text };

export default S;
