import ImgElem from "@/components/atoms/ImgElem/ImgElem";
import styled from "styled-components";
import { Colors } from "./app.styled";

const Container = styled.div`
  margin: 2.5rem 0rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 80rem) {
    margin: 10rem 0rem;
  }
`;

const Image = styled(ImgElem)`
  max-width: 48rem;
  padding: 0rem 0rem;
`;

const Title = styled.h1`
  margin-top: 3.5rem;

  color: ${Colors.Whitefafafa};
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: 48rem) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h2`
  margin-top: 1rem;

  color: ${Colors.Grey8f8f90};
  font-family: Mulish;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;

  @media only screen and (min-width: 48rem) {
    font-size: 1.125rem;
  }
`;

const S = { Container, Image, Title, Subtitle };

export default S;
