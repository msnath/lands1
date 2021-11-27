import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestIDs } from "@/utils/test.util";
import Dropdown, { DropdownProps } from "./Dropdown";

const onChangeFocus = jest.fn();

const props: DropdownProps = {
  children: [
    <div key={0}>Dropdown header</div>,
    <div key={1}>Dropdown body</div>,
  ],
};

afterEach(() => {
  onChangeFocus.mockReset();
});

describe("Dropdown", () => {
  it("renders to the DOM", () => {
    render(<Dropdown {...props} />);

    const elem = screen.getByTestId(TestIDs.Dropdown);
    const header = screen.getByText(/Dropdown header/i);
    const body = screen.getByText(/Dropdown body/i);

    expect(elem).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(body).not.toBeVisible();
  });

  it("calls onChangeFocus", () => {
    render(<Dropdown {...props} onChangeFocus={onChangeFocus} />);

    const header = screen.getByText(/Dropdown header/i);
    const body = screen.getByText(/Dropdown body/i);

    if (!header) throw Error("Header not found");
    if (!body) throw Error("Body not found");

    expect(onChangeFocus).toHaveBeenCalledTimes(0);

    userEvent.click(header);
    expect(onChangeFocus).toHaveBeenCalledTimes(1);

    userEvent.click(document.body);
    expect(onChangeFocus).toHaveBeenCalledTimes(2);
  });

  it("collapses on re-click, hides on click away", () => {
    render(<Dropdown {...props} onReclickCollapse />);

    const header = screen.getByText(/Dropdown header/i);
    const body = screen.getByText(/Dropdown body/i);

    if (!header) throw Error("Header not found");
    if (!body) throw Error("Body not found");

    expect(body).not.toBeVisible();

    userEvent.click(header);
    expect(body).toBeVisible();

    userEvent.click(header);
    expect(body).not.toBeVisible();

    userEvent.click(document.body);
    expect(body).not.toBeVisible();
  });

  it("[uncontrolled] shows on click, hides on click away", () => {
    render(<Dropdown {...props} />);

    const header = screen.getByText(/Dropdown header/i);
    const body = screen.getByText(/Dropdown body/i);

    if (!header) throw Error("Header not found");
    if (!body) throw Error("Body not found");

    expect(body).not.toBeVisible();

    userEvent.click(header);
    expect(body).toBeVisible();

    userEvent.click(header);
    expect(body).toBeVisible();

    userEvent.click(document.body);
    expect(body).not.toBeVisible();
  });

  it("[controlled] hides on focused:false, unaffected on click away", () => {
    render(<Dropdown {...props} focused={false} />);

    const header = screen.getByText(/Dropdown header/i);
    const body = screen.getByText(/Dropdown body/i);

    if (!header) throw Error("Header not found");
    if (!body) throw Error("Body not found");

    expect(body).not.toBeVisible();

    userEvent.click(header);
    expect(body).not.toBeVisible();

    userEvent.click(document.body);
    expect(body).not.toBeVisible();
  });

  it("[controlled] shows on focused:true, unaffected on click away", () => {
    render(<Dropdown {...props} focused={true} />);

    const header = screen.getByText(/Dropdown header/i);
    const body = screen.getByText(/Dropdown body/i);

    if (!header) throw Error("Header not found");
    if (!body) throw Error("Body not found");

    expect(body).toBeVisible();

    userEvent.click(header);
    expect(body).toBeVisible();

    userEvent.click(document.body);
    expect(body).toBeVisible();
  });
});
