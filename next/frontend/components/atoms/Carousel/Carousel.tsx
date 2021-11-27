import useEventListener from "@/hooks/useEventListener.hook";
import { TestIDs } from "@/utils/test.util";
import React from "react";
import SvgElem, { SvgElems } from "../SvgElem/SvgElem";
import S, { ShadeProps } from "./Carousel.styled";

export type CarouselProps = ShadeProps & { slides: JSX.Element[] };

const Carousel: React.FC<CarouselProps> = ({ shade, slides }) => {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const refSlides = React.useRef<HTMLUListElement>(null);

  const maxSlide = slides.length - 1;

  const isFirstSlide = slideIdx === 0;
  const isLastSlide = slideIdx === maxSlide;

  const onClickBack = () => setSlideIdx((s) => Math.max(s - 1, 0));

  const onClickNext = React.useCallback(
    () => setSlideIdx((s) => Math.min(s + 1, Math.max(maxSlide, 0))),
    [maxSlide]
  );

  React.useEffect(() => {
    if (slideIdx < 0 || slideIdx > maxSlide) setSlideIdx(0);
  }, [slideIdx, maxSlide, slides]);

  React.useEffect(() => {
    let maxWidth = 0;
    let maxHeight = 0;
    const children = refSlides.current?.children ?? [];
    for (let i = 0; i < children.length; i++) {
      const childWidth = children[i].getBoundingClientRect().width;
      if (childWidth > maxWidth) maxWidth = childWidth;
    }
    for (let i = 0; i < children.length; i++) {
      const childHeight = children[i].getBoundingClientRect().height;
      if (childHeight > maxHeight) maxHeight = childHeight;
    }
    setWidth(maxWidth);
    setHeight(maxHeight);
  }, [slides]);

  const [startX, setStartX] = React.useState(0);
  const [moveX, setMoveX] = React.useState(0);

  const onTouchStart = (e: TouchEvent) =>
    setStartX(Math.trunc(e.targetTouches[0].clientX));

  const onTouchMove = (e: TouchEvent) =>
    setMoveX(Math.trunc(e.targetTouches[0].clientX));

  const onTouchEnd = () => {
    if (moveX > startX + 100) onClickBack();
    else if (moveX < startX - 100) onClickNext();
    setStartX(0);
    setMoveX(0);
  };

  useEventListener(refSlides, "touchstart", onTouchStart);
  useEventListener(refSlides, "touchmove", onTouchMove);
  useEventListener(refSlides, "touchend", onTouchEnd);

  return (
    <S.Carousel data-testid={TestIDs.Carousel}>
      <S.Slides ref={refSlides} height={height} left={width * slideIdx}>
        {slides.map((slide, i) => (
          <S.Slide
            key={i}
            aria-hidden={slideIdx !== i}
            height={height}
            left={width * i}
          >
            {slide}
          </S.Slide>
        ))}
      </S.Slides>

      {slides.length > 1 && (
        <S.Navigation theme="light">
          <S.Pages>
            {[...Array(slides.length)].map((_, i) => (
              <S.Page
                shade={shade}
                key={i}
                selected={slideIdx === i}
                onClick={() => setSlideIdx(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </S.Pages>
          <S.Buttons>
            <S.Button
              shade={shade}
              disabled={isFirstSlide}
              onClick={onClickBack}
              aria-label="Previous Slide"
            >
              <SvgElem svg={SvgElems.IconArrowLeft} />
            </S.Button>
            <S.Button
              shade={shade}
              disabled={isLastSlide}
              onClick={onClickNext}
              aria-label="Next Slide"
            >
              <SvgElem svg={SvgElems.IconArrowRight} />
            </S.Button>
          </S.Buttons>
        </S.Navigation>
      )}
    </S.Carousel>
  );
};

export default Carousel;
