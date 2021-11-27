import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsAccordian, { DetailsAccordianProps } from "./DetailsAccordian";

const props: DetailsAccordianProps = {
  header: "header text",
};

describe("DetailsAccordian", () => {
  it("renders to the DOM", () => {
    render(<DetailsAccordian {...props}>body text</DetailsAccordian>);

    const elem = screen.getByTestId(TestIDs.DetailsAccordian);
    const header = screen.getByText(props.header);
    const body = screen.getByText("body text");

    expect(elem).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
