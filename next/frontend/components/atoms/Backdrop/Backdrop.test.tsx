import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import Backdrop from "./Backdrop";

describe("Backdrop", () => {
  it("renders to the DOM", () => {
    render(<Backdrop />);

    const elem = screen.getByTestId(TestIDs.Backdrop);

    expect(elem).toBeInTheDocument();
  });
});
