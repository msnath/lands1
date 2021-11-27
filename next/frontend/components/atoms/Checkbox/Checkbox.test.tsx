import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import Checkbox, { CheckboxProps } from "./Checkbox";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();

const props: CheckboxProps = {
  text: "checkbox text",
  checked: false,
  onClick,
};

afterEach(() => {
  onClick.mockReset();
});

describe("Checkbox", () => {
  it("renders to the DOM, checked:false", () => {
    render(<Checkbox {...props} checked={false} />);

    const elem = screen.getByTestId(TestIDs.Checkbox);
    const text = screen.getByText(props.text);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    userEvent.click(elem);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders to the DOM, checked:true", () => {
    render(<Checkbox {...props} checked={true} />);

    const elem = screen.getByTestId(TestIDs.Checkbox);
    const text = screen.getByText(props.text);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    userEvent.click(elem);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
