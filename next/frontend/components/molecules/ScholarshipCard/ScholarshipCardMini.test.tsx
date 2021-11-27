import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import ScholarshipCardMini, {
  ScholarshipCardMiniProps,
} from "./ScholarshipCardMini";

const description = "description text";

const props: ScholarshipCardMiniProps = {
  text: "text",
  arrow: true,
};

describe("ScholarshipCardMini", () => {
  it("renders to the DOM, no description", () => {
    render(<ScholarshipCardMini {...props} />);

    const elem = screen.getByTestId(TestIDs.ScholarshipCardMini);
    const text = screen.getByText(props.text);
    const desc = screen.queryByText(description);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(desc).toBeNull();
  });

  it("renders to the DOM, with description", () => {
    render(<ScholarshipCardMini {...props} description={description} />);

    const elem = screen.getByTestId(TestIDs.ScholarshipCardMini);
    const text = screen.getByText(props.text);
    const desc = screen.getByText(description);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
});
