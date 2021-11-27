import React from "react";
import { render, screen } from "@testing-library/react";
import { withMarkup, TestIDs } from "@/utils/test.util";
import CourseCardMini, { CourseCardMiniProps } from "./CourseCardMini";
import { formatTuitionFee, formatDurationTag } from "@/utils/functions.util";
import LinkRoutes from "@/routes/LinkRoutes.route";

const getByTextContent = withMarkup(screen.getByText);

const props: CourseCardMiniProps = {
  objectID: "objectID text",
  course_id: 1,
  course_name: "course_name text",
  duration: { duration_tag: "1 Year" },
  tuition_fee: { currency_code: "USD", tuition_fee: 12345 },
};

describe("CourseCardMini", () => {
  it("renders to the DOM", () => {
    render(<CourseCardMini {...props} />);

    const elem = screen.getByTestId(TestIDs.CourseCardMini);
    const li = screen.getByRole("listitem");
    const link = screen.getByRole("link");
    const courseName = screen.getByText(props.course_name);
    const tuitionFee = getByTextContent(
      `Annual Fees: ${formatTuitionFee(
        props.tuition_fee.currency_code,
        props.tuition_fee.tuition_fee
      )}`
    );
    const duration = getByTextContent(
      `Course Duration: ${formatDurationTag(props.duration.duration_tag)}`
    );

    expect(elem).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(elem).toEqual(li);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", LinkRoutes.Course(props.course_id));
    expect(courseName).toBeInTheDocument();
    expect(tuitionFee).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });
});
