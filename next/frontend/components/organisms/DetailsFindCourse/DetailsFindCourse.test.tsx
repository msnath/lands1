import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsFindCourse, { DetailsFindCourseProps } from "./DetailsFindCourse";
import ReduxMock from "@/__mocks__/redux.mock";

export const props: DetailsFindCourseProps = {
  institute_name: "institute_name text",
};

describe("DetailsFindCourse", () => {
  it("renders to the DOM", () => {
    render(
      <ReduxMock>
        <DetailsFindCourse {...props} />
      </ReduxMock>
    );

    const elem = screen.getByTestId(TestIDs.DetailsFindCourse);
    const text = screen.getByText(/find a course/i);
    const viewAll = screen.getByText(/view all/i);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(viewAll).toBeInTheDocument();
  });
});
