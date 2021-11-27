import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestIDs } from "@/utils/test.util";
import Carousel, { CarouselProps } from "./Carousel";

const props: CarouselProps = {
  shade: "dark",
  slides: [
    <div key={0}>Slide 0</div>,
    <div key={1}>Slide 1</div>,
    <div key={2}>Slide 2</div>,
  ],
};

describe("Carousel", () => {
  it("renders to the DOM", () => {
    render(<Carousel {...props} />);

    const elem = screen.getByTestId(TestIDs.Carousel);
    const slides = screen.getAllByText(/Slide/i);
    const pages = screen.getAllByLabelText(/Page/i);
    const next = screen.getByLabelText(/Next Slide/i);
    const prev = screen.getByLabelText(/Previous Slide/i);

    expect(elem).toBeInTheDocument();
    expect(slides).toHaveLength(props.slides.length);
    for (const slide of slides) expect(slide).toBeInTheDocument();
    expect(pages).toHaveLength(props.slides.length);
    for (const page of pages) expect(page).toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(prev).toBeInTheDocument();

    expectSlideToBeVisible(slides, 0);
  });

  it("navigates to specific slide", () => {
    render(<Carousel {...props} />);

    const slides = screen.getAllByText(/Slide/i);
    const pages = screen.getAllByLabelText(/Page/i);

    // click on 1st page
    userEvent.click(pages[0]);
    expectSlideToBeVisible(slides, 0);

    // click on 2nd page
    userEvent.click(pages[1]);
    expectSlideToBeVisible(slides, 1);

    // click on 3rd page
    userEvent.click(pages[2]);
    expectSlideToBeVisible(slides, 2);
  });

  it("navigate to next and previous slides", () => {
    render(<Carousel {...props} />);

    const slides = screen.getAllByText(/Slide/i);
    const next = screen.getByLabelText(/Next Slide/i);
    const prev = screen.getByLabelText(/Previous Slide/i);

    // click next slide
    expectSlideToBeVisible(slides, 0);
    userEvent.click(next);
    expectSlideToBeVisible(slides, 1);
    userEvent.click(next);
    expectSlideToBeVisible(slides, 2);
    userEvent.click(next);
    expectSlideToBeVisible(slides, 2);

    // click previous slide
    userEvent.click(prev);
    expectSlideToBeVisible(slides, 1);
    userEvent.click(prev);
    expectSlideToBeVisible(slides, 0);
    userEvent.click(prev);
    expectSlideToBeVisible(slides, 0);
  });
});

const expectSlideToBeVisible = (elems: HTMLElement[], index: number) => {
  // list items' final hidden state only takes effect after 500ms of CSS transition
  setTimeout(() => {
    for (let i = 0; i < elems.length; i++) {
      index === i
        ? expect(elems[i]).toHaveAttribute("aria-hidden", "true")
        : expect(elems[i]).toHaveAttribute("aria-hidden", "false");
    }
  }, 500);
};
