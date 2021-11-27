import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import CourseTile, { CourseTileProps } from "./CourseTile";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";

const props: CourseTileProps = {
  objectID: "objectID text",
  course_id: 1,
  course_name: "course_name text",
  institute_name: "institute_name text",
  country_name: "country_name text",
  images: { logo_img: MockImage.src, banner_img: MockImage.src },
};

describe("CourseTile", () => {
  it("renders to the DOM", () => {
    render(<CourseTile {...props} />);

    const elem = screen.getByTestId(TestIDs.CourseTile);
    const li = screen.getByRole("listitem");
    const link = screen.getByRole("link");
    const img = screen.getByRole("img");
    const courseName = screen.getByText(props.course_name);
    const instituteName = screen.getByText(props.institute_name);
    const countryName = screen.getByText(props.country_name);

    expect(elem).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(elem).toEqual(li);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", LinkRoutes.Course(props.course_id));
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
    expect(img).toHaveAttribute("alt");
    expect(courseName).toBeInTheDocument();
    expect(instituteName).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
  });
});
