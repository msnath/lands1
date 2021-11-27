import { Colors } from "@/styles/app.styled";
import styled from "styled-components";

const Tile = styled.li`
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 0.125rem;
    background: ${Colors.Black212631};
    border-radius: 0.125rem;
  }
`;

const Anchor = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1.5rem;
  border-radius: 1.25rem;
`;

const Image = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  overflow: hidden;
`;

const Information = styled.div``;

const Title = styled.p`
  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`;

const Text = styled.p`
  color: ${Colors.Greybcc5d3};
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;

const S = { Tile, Anchor, Image, Information, Title, Text };

export default S;
