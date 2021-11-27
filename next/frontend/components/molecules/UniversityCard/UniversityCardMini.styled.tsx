import {
  boxshadow,
  Colors,
  hoverdefault,
  padding,
  textoverflow,
} from "@/styles/app.styled";
import styled from "styled-components";

const Tile = styled.li``;

const Anchor = styled.a`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1.5rem;
  align-items: center;
  background: ${Colors.White};
  border-radius: 1.25rem;
  ${padding.both}
  ${hoverdefault};
`;

const Image = styled.div`
  grid-row: 1/3;
  width: 4rem;
  height: 4rem;
  border-radius: 1.25rem;
  overflow: hidden;
  ${boxshadow};

  @media only screen and (min-width: 48rem) {
    width: 5.5rem;
    height: 5.5rem;
  }
`;

const Title = styled.p`
  width: calc(100% - 2rem);

  color: ${Colors.Black101010};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: left;

  ${textoverflow(2)};
`;

const Text = styled.p`
  color: ${Colors.Grey6c6c6d};
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3125rem;
  text-align: left;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
`;

const S = { Tile, Anchor, Image, Title, Text, Arrow };

export default S;
