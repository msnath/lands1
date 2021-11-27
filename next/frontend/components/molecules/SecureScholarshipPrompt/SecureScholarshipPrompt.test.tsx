import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import SecureScholarshipPrompt, {
  SecureScholarshipPromptProps,
} from "./SecureScholarshipPrompt";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";

const props: SecureScholarshipPromptProps = {
  institute_id: 123,
  institute_name: "institute_name text",
  country_name: "country_name text",
  logo_img: MockImage.src,
  visible: true,
};

describe("SecureScholarshipPrompt", () => {
  it("renders to the DOM", () => {
    render(<SecureScholarshipPrompt {...props} />);

    const elem = screen.getByTestId(TestIDs.SecureScholarshipPrompt);
    const instituteName = screen.getByText(props.institute_name);
    const countryName = screen.getByText(props.institute_name);
    const logoImg = screen.getByRole("img");
    const button = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
    expect(instituteName).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src");
    expect(logoImg).toHaveAttribute("alt");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(props.institute_id)
    );
  });

  it("renders to the DOM, with course_name", () => {
    render(
      <SecureScholarshipPrompt {...props} course_id={123} />
    );

    const elem = screen.getByTestId(TestIDs.SecureScholarshipPrompt);
    const button = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(props.institute_id, 123)
    );
  });
});
