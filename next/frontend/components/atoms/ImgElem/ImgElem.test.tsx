import React from "react";
import { render, screen } from "@testing-library/react";
import ImgElem, { ImgElemProps, ImgElems } from "./ImgElem";
import { TestIDs } from "@/utils/test.util";

const props: ImgElemProps = { img: ImgElems.Mock };

describe("ImgElem", () => {
  it("renders to the DOM", () => {
    render(<ImgElem {...props} />);

    const elem = screen.getByTestId(TestIDs.ImgElem);
    const img = screen.getByRole("img");

    expect(elem).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
    expect(img).toHaveAttribute("alt");
  });
});
