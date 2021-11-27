import SvgElem from "@/components/atoms/SvgElem/SvgElem";
import styled from "styled-components";
import { bluebutton, boxshadow, Colors, padding } from "./app.styled";

const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled(SvgElem)`
  position: absolute;
  top: 0;
  left: 0;
  ${padding.both};

  @media only screen and (min-width: 64rem) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Title = styled.h1`
  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 2.75rem;
  font-weight: 700;
  text-align: center;
  margin-top: 2.25rem;
  margin-bottom: 2.75rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${Colors.Greybcc5d3};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;

  margin-top: 1.5rem;
  margin-bottom: 0.375rem;
`;

const Input = styled.input`
  background: ${Colors.Black23272b};
  border: 2px solid ${Colors.Black3b3b3c};
  border-radius: 0.625rem;
  padding: 0.5rem 0.75rem;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #373e43;
    }
  }
  &:focus {
    background: ${Colors.Black3b3b3c};
  }

  &[type="text"],
  &[type="tel"],
  &[type="email"] {
    color: ${Colors.White};
    font-family: Mulish;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: left;
  }

  &[type="text"]::placeholder,
  &[type="tel"]::placeholder,
  &[type="email"]::placeholder {
    color: ${Colors.Grey8f8f90};
    font-family: Mulish;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: left;
  }
`;

type DropdownProps = { width?: number };

const Dropdown = styled.div<DropdownProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.75rem;
  width: ${(props) => (props.width ? `${props.width}px` : `100%`)};

  background: ${Colors.Black23272b};
  border: 2px solid ${Colors.Black3b3b3c};
  border-radius: 0.625rem;
  padding: 0.5rem 0.75rem;

  & div {
    color: ${Colors.White};
  }
`;

const Menu = styled.div`
  position: fixed;
  width: min(30rem, 90%);
  height: min(30rem, 90%);
  background: ${Colors.Black23272b};
  border-radius: 0.625rem;
  z-index: 1;
  padding: 0.5rem;
  ${boxshadow};

  @media only screen and (min-width: 48rem) {
    position: absolute;
    top: calc(100% + 0.5rem);
    width: min(25rem, 80vw);
    height: min(25rem, 50vh);
  }
`;

const MenuSimple = styled.div`
  position: fixed;
  display: grid;
  row-gap: 0.5rem;
  width: min(30rem, 90%);
  background: ${Colors.Black23272b};
  border-radius: 0.625rem;
  z-index: 1;
  padding: 0.5rem;
  ${boxshadow};

  @media only screen and (min-width: 48rem) {
    position: absolute;
    top: calc(100% + 0.5rem);
    width: min(25rem, 80vw);
  }
`;

const OptionButton = styled.button`
  & div {
    color: ${Colors.Grey8f8f90};
  }
`;

const TextArea = styled.textarea`
  background: ${Colors.Black23272b};
  border: 2px solid ${Colors.Black3b3b3c};
  border-radius: 0.625rem;
  padding: 0.5rem 0.75rem;
  color: ${Colors.Greye5e5e5};
  resize: vertical;
  min-height: 8rem;

  color: ${Colors.White};
  font-family: Mulish;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;

  &::placeholder {
    color: ${Colors.Grey8f8f90};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #373e43;
    }
  }
  &:focus {
    background: ${Colors.Black3b3b3c};
  }
`;

const Submit = styled.button`
  background: ${Colors.Blue};
  color: ${Colors.White};
  border-radius: 0.625rem;
  padding: 0.625rem;
  margin-top: 2.75rem;
  margin-bottom: 6rem;
  transition: all 300ms ease;

  ${bluebutton};
`;

const PhoneNumber = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
`;

const S = {
  Container,
  Background,
  Title,
  Form,
  Label,
  Input,
  Dropdown,
  Menu,
  MenuSimple,
  OptionButton,
  TextArea,
  Submit,
  PhoneNumber,
};

export default S;
