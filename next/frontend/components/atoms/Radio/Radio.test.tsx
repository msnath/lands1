import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import Radio, { RadioProps } from "./Radio";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();

const props: RadioProps = {
  text: "radio text",
  checked: false,
  onClick,
};

afterEach(() => {
  onClick.mockReset();
});

describe("Radio", () => {
  it("renders to the DOM, checked:false", () => {
    render(<Radio {...props} checked={false} />);

    const elem = screen.getByTestId(TestIDs.Radio);
    const text = screen.getByText(props.text);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    userEvent.click(elem);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders to the DOM, checked:true", () => {
    render(<Radio {...props} checked={true} />);

    const elem = screen.getByTestId(TestIDs.Radio);
    const text = screen.getByText(props.text);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    userEvent.click(elem);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
