import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import UniversityCardMini, {
  UniversityCardMiniProps,
} from "./UniversityCardMini";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";

const props: UniversityCardMiniProps = {
  institute_id: 1,
  institute_name: "institute_name text",
  country_name: "country_name text",
  logo_img: MockImage.src,
};

describe("UniversityCardMini", () => {
  it("renders to the DOM", () => {
    render(<UniversityCardMini {...props} />);

    const elem = screen.getByTestId(TestIDs.UniversityCardMini);
    const li = screen.getByRole("listitem");
    const link = screen.getByRole("link");
    const img = screen.getByRole("img");
    const instituteName = screen.getByText(props.institute_name);
    const countryName = screen.getByText(props.country_name);

    expect(elem).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(elem).toEqual(li);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      LinkRoutes.University(props.institute_id)
    );
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
    expect(img).toHaveAttribute("alt");
    expect(instituteName).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
  });
});
