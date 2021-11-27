import { Colors, hoverdefault, padding, textoverflow } from "@/styles/app.styled";
import styled from "styled-components";

const Tile = styled.li``;

const Anchor = styled.a`
  display: block;
  background: ${Colors.White};
  border-radius: 0.625rem;
  ${padding.both};
  ${hoverdefault};
`;

const Title = styled.p`
  width: calc(100% - 2rem);
  height: 2.5rem;
  margin-bottom: 0.5rem;

  color: ${Colors.Black101010};
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
  ${textoverflow(2)}

  @media only screen and (min-width:48rem) {
    height: 1.25rem;
    margin-bottom: 0.5rem;
    ${textoverflow(1)}
  }
`;

const Content = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;

  @media only screen and (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }
`;

const Text = styled.p`
  color: ${Colors.Grey6c6c6d};
  font-family: Mulish;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.875rem;
  text-align: left;

  & > span {
    color: ${Colors.Black3b3b3c};
    font-weight: 600;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
`;

const S = { Tile, Anchor, Title, Content, Text, Arrow };

export default S;
