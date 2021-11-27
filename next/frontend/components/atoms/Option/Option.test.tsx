import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import Option, { OptionProps } from "./Option";
import { MockImage } from "../ImgElem/ImgElem";

const props: OptionProps = { text: "option text" };

describe("Option", () => {
  it("renders to the DOM", () => {
    render(<Option {...props} />);

    const elem = screen.getByTestId(TestIDs.Option);
    const text = screen.getByText(props.text);
    const img = screen.queryByRole("img");

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(elem).toEqual(text);
    expect(img).toBeNull();
  });

  it("renders to the DOM, with img", () => {
    render(<Option {...props} img={MockImage.src} />);

    const elem = screen.getByTestId(TestIDs.Option);
    const text = screen.getByText(props.text);
    const img = screen.getByRole("img");

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(elem).toEqual(text);
    expect(img).toBeInTheDocument();
  });
});
