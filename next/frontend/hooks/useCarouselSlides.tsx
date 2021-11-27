import { padding } from "@/styles/app.styled";
import styled from "styled-components";
import useDimensions from "./useDimensions.hook";

const Slide = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  ${padding.both};

  @media only screen and (min-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const useCarouselSlides = <T,>(data: T[], Component: React.FC<T>) => {
  const { is1280, is768 } = useDimensions();
  const n = is1280 ? 3 : is768 ? 2 : 1;

  const groupedData: T[][] = [];
  for (let i = 0; i < data.length; i += n)
    groupedData.push(data.slice(i, i + n));

  const slides: JSX.Element[] = [];

  for (const subgroup of groupedData) {
    const elems = subgroup.map((props, i) => <Component key={i} {...props} />);
    slides.push(<Slide>{elems}</Slide>);
  }

  return slides;
};

export default useCarouselSlides;
