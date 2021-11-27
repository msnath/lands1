import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import SvgElem, { SvgElemProps, SvgElems } from "./SvgElem";

const props: SvgElemProps = { svg: SvgElems.Mock };

describe("SvgElem", () => {
  it("renders to the DOM", () => {
    render(<SvgElem {...props} ref={null} />);

    const elem = screen.getByTestId(TestIDs.SvgElem);

    expect(elem).toBeInTheDocument();
    expect(elem.nodeName).toEqual("svg");
  });
});
