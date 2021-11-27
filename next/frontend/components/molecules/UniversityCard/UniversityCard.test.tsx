import React from "react";
import { render, screen } from "@testing-library/react";
import { withMarkup, TestIDs } from "@/utils/test.util";
import UniversityCard, { UniversityCardProps } from "./UniversityCard";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";

const getByTextContent = withMarkup(screen.getByText);

const mockFeeWaiver = {
  level_name: "level_name text",
  title: "title text",
  promotional_scholarship: "promotional_scholarship text",
};

const props: UniversityCardProps = {
  objectID: "objectID text",
  institute_id: 1,
  institute_name: "institute_name text",
  country_name: "country_name text",
  city_name: "city_name text",
  qs_rank: 2,
  courses: 3,
  tuition_fee: { currency_code: "USD", tuition_fee: 12345 },
  fee_waivers: [],
  images: { logo_img: MockImage.src, banner_img: MockImage.src },
};

describe("UniversityCard", () => {
  it("renders to the DOM", () => {
    render(<UniversityCard {...props} />);

    const elem = screen.getByTestId(TestIDs.UniversityCard);
    const li = screen.getByRole("listitem");
    const linkMain = screen.getAllByRole("link")[0];
    const linkSecure = screen.getByText(/secure scholarship/i);
    const linksUniversity = screen.getAllByLabelText(/view university/i);

    const images = screen.getAllByRole("img");
    const logo = images[0];
    const banner = images[1];
    const instituteName = screen.getByText(props.institute_name);
    const countryName = screen.getByText(
      props.city_name + ", " + props.country_name
    );
    const tuitionFee = getByTextContent("Est. Tuition/Year USD 12300");
    const courses = getByTextContent("No. of Courses 3 Courses");

    expect(elem).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(elem).toEqual(li);
    expect(linkMain).toBeInTheDocument();
    expect(linkMain).toHaveAttribute(
      "href",
      LinkRoutes.University(props.institute_id)
    );
    expect(linkSecure).toBeInTheDocument();
    expect(linkSecure).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(props.institute_id)
    );
    for (const link of linksUniversity) {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        "href",
        LinkRoutes.University(props.institute_id)
      );
    }

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
    expect(logo).toHaveAttribute("alt");
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute("src");
    expect(banner).toHaveAttribute("alt");
    expect(instituteName).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
    expect(tuitionFee).toBeInTheDocument();
    expect(courses).toBeInTheDocument();
  });

  it("renders —, if tuition_fee.tuition_fee = 0", () => {
    render(
      <UniversityCard
        {...props}
        tuition_fee={{ currency_code: "USD", tuition_fee: 0 }}
      />
    );
    const tuitionFee = getByTextContent(`Est. Tuition/Year —`);
    expect(tuitionFee).toBeInTheDocument();
  });

  it("renders —, if tuition_fee.tuition_fee = null", () => {
    render(
      <UniversityCard
        {...props}
        tuition_fee={{ currency_code: "USD", tuition_fee: null }}
      />
    );
    const tuitionFee = getByTextContent(`Est. Tuition/Year —`);
    expect(tuitionFee).toBeInTheDocument();
  });

  it("renders —, if courses:0", () => {
    render(<UniversityCard {...props} courses={0} />);
    const courses = getByTextContent("No. of Courses —");
    expect(courses).toBeInTheDocument();
  });

  it("renders 1 Course, if courses:1", () => {
    render(<UniversityCard {...props} courses={1} />);
    const courses = getByTextContent("No. of Courses 1 Course");
    expect(courses).toBeInTheDocument();
  });

  it("renders 2 Courses, if courses:2", () => {
    render(<UniversityCard {...props} courses={2} />);
    const courses = getByTextContent("No. of Courses 2 Courses");
    expect(courses).toBeInTheDocument();
  });

  it("renders to the DOM: fee_waivers.length:0", () => {
    render(<UniversityCard {...props} fee_waivers={[]} />);

    const link = screen.queryByLabelText(/view scholarships/i);
    const scholarshipCount = screen.queryByText(/0 scholarships available/i);
    const scholarshipTitle = screen.queryByText(
      new RegExp(
        `${mockFeeWaiver.title} on ${mockFeeWaiver.level_name} courses`,
        "i"
      )
    );
    const scholarshipDesc = screen.queryByText(
      mockFeeWaiver.promotional_scholarship
    );

    expect(link).toBeNull();
    expect(scholarshipCount).toBeNull();
    expect(scholarshipTitle).toBeNull();
    expect(scholarshipDesc).toBeNull();
  });

  it("renders to the DOM: fee_waivers.length:1", () => {
    render(<UniversityCard {...props} fee_waivers={[mockFeeWaiver]} />);

    const link = screen.getByLabelText(/view scholarships/i);
    const scholarshipCount = screen.queryByText(/1 scholarship available/i);
    const scholarshipTitle = screen.getByText(
      new RegExp(
        `${mockFeeWaiver.title} on ${mockFeeWaiver.level_name} courses`,
        "i"
      )
    );
    const scholarshipDesc = screen.queryByText(
      mockFeeWaiver.promotional_scholarship
    );

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      LinkRoutes.UniversityScholarships(props.institute_id)
    );
    expect(scholarshipCount).toBeNull();
    expect(scholarshipTitle).toBeInTheDocument();
    expect(scholarshipDesc).toBeNull();
  });

  it("renders to the DOM: fee_waivers.length:2", () => {
    render(
      <UniversityCard {...props} fee_waivers={[mockFeeWaiver, mockFeeWaiver]} />
    );

    const link = screen.getByLabelText(/view scholarships/i);
    const scholarshipCount = screen.getByText(/2 scholarships available/i);
    const scholarshipTitle = screen.queryByText(
      new RegExp(
        `${mockFeeWaiver.title} on ${mockFeeWaiver.level_name} courses`,
        "i"
      )
    );
    const scholarshipDesc = screen.queryByText(
      mockFeeWaiver.promotional_scholarship
    );

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      LinkRoutes.UniversityScholarships(props.institute_id)
    );
    expect(scholarshipCount).toBeInTheDocument();
    expect(scholarshipTitle).toBeNull();
    expect(scholarshipDesc).toBeNull();
  });
});
