import React from "react";
import { render, screen } from "@testing-library/react";
import ScrollTopButton from "./ScrollTopButton";

describe("ScrollTopButton", () => {
  it("renders to the DOM", () => {
    render(<ScrollTopButton />);

    const elem = screen.getByRole("button");

    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent(/back to top/i);
  });
});
