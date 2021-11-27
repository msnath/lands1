import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsExploreUniversity, {
  DetailsExploreUniversityProps,
} from "./DetailsExploreUniversity";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";

const props: DetailsExploreUniversityProps = {
  university: {
    institute_id: 1,
    institute_name: "institute_name text",
    country_name: "country_name text",
    logo_img: MockImage.src,
  },
};

describe("DetailsExploreUniversity", () => {
  it("renders to the DOM", () => {
    render(<DetailsExploreUniversity {...props} />);

    const elem = screen.getByTestId(TestIDs.DetailsExploreUniversity);
    const text = screen.getByText(/explore university/i);
    const card = screen.getByTestId(TestIDs.UniversityCardMini);

    expect(elem).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });
});
