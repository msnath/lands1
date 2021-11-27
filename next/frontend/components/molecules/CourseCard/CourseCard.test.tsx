import React from "react";
import { render, screen } from "@testing-library/react";
import { withMarkup, TestIDs } from "@/utils/test.util";
import CourseCard, { CourseCardProps } from "./CourseCard";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";

const getByTextContent = withMarkup(screen.getByText);

const mockFeeWaiver = {
  level_name: "level_name text",
  title: "title text",
  promotional_scholarship: "promotional_scholarship text",
};

const props: CourseCardProps = {
  objectID: "objectID text",
  institute_id: 1,
  institute_name: "institute_name text",
  institute_qs_rank: null,
  course_id: 2,
  course_name: "course_name text",
  country_name: "country_name text",
  city_name: "city_name text",
  duration: { duration_tag: "1 Year" },
  tuition_fee: { currency_code: "USD", tuition_fee: 12345 },
  fee_waivers: [],
  images: { logo_img: MockImage.src, banner_img: MockImage.src },
};

describe("CourseCard", () => {
  it("renders to the DOM", () => {
    render(<CourseCard {...props} />);

    const elem = screen.getByTestId(TestIDs.CourseCard);
    const li = screen.getByRole("listitem");
    const linkMain = screen.getAllByRole("link")[0];
    const linkSecure = screen.getByText(/secure scholarship/i);
    const linksCourse = screen.getAllByLabelText(/view course/i);
    const images = screen.getAllByRole("img");
    const logo = images[0];
    const banner = images[1];

    const courseName = screen.getByText(props.course_name);
    const instituteName = screen.getByText(props.institute_name);
    const countryName = screen.getByText(
      props.city_name + ", " + props.country_name
    );

    const tuitionFee = getByTextContent("Est. Tuition/Year USD 12300");
    const duration = getByTextContent("Duration 1 Year");

    expect(elem).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(elem).toEqual(li);

    expect(linkMain).toBeInTheDocument();
    expect(linkMain).toHaveAttribute(
      "href",
      LinkRoutes.Course(props.course_id)
    );
    expect(linkSecure).toBeInTheDocument();
    expect(linkSecure).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(props.institute_id, props.course_id)
    );
    for (const link of linksCourse) {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", LinkRoutes.Course(props.course_id));
    }

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
    expect(logo).toHaveAttribute("alt");
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute("src");
    expect(banner).toHaveAttribute("alt");

    expect(courseName).toBeInTheDocument();
    expect(instituteName).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
    expect(tuitionFee).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });

  it("renders —, if tuition_fee.tuition_fee = 0", () => {
    render(
      <CourseCard
        {...props}
        tuition_fee={{ currency_code: "USD", tuition_fee: 0 }}
      />
    );
    const tuitionFee = getByTextContent(`Est. Tuition/Year —`);
    expect(tuitionFee).toBeInTheDocument();
  });

  it("renders —, if tuition_fee.tuition_fee = null", () => {
    render(
      <CourseCard
        {...props}
        tuition_fee={{ currency_code: "USD", tuition_fee: null }}
      />
    );
    const tuitionFee = getByTextContent(`Est. Tuition/Year —`);
    expect(tuitionFee).toBeInTheDocument();
  });

  it("renders —, if duration.duration_tag = ''", () => {
    render(<CourseCard {...props} duration={{ duration_tag: "" }} />);
    const duration = getByTextContent(`Duration —`);
    expect(duration).toBeInTheDocument();
  });

  it("renders —, if duration.duration_tag = null", () => {
    render(<CourseCard {...props} duration={{ duration_tag: null }} />);
    const duration = getByTextContent(`Duration —`);
    expect(duration).toBeInTheDocument();
  });

  it("renders to the DOM: fee_waivers.length:0", () => {
    render(<CourseCard {...props} fee_waivers={[]} />);

    const link = screen.queryByLabelText(/view scholarships/i);
    const scholarshipCount = screen.queryByText(/0 scholarships available/i);
    const scholarshipTitle = screen.queryByText(mockFeeWaiver.title);
    const scholarshipDesc = screen.queryByText(
      mockFeeWaiver.promotional_scholarship
    );

    expect(link).toBeNull();
    expect(scholarshipCount).toBeNull();
    expect(scholarshipTitle).toBeNull();
    expect(scholarshipDesc).toBeNull();
  });

  it("renders to the DOM: fee_waivers.length:1", () => {
    render(<CourseCard {...props} fee_waivers={[mockFeeWaiver]} />);

    const link = screen.getByLabelText(/view scholarships/i);
    const scholarshipCount = screen.queryByText(/1 scholarship available/i);
    const scholarshipTitle = screen.getByText(mockFeeWaiver.title);
    const scholarshipDesc = screen.getByText(
      mockFeeWaiver.promotional_scholarship
    );

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      LinkRoutes.CourseScholarships(props.course_id)
    );
    expect(scholarshipCount).toBeNull();
    expect(scholarshipTitle).toBeInTheDocument();
    expect(scholarshipDesc).toBeInTheDocument();
  });

  it("renders to the DOM: fee_waivers.length:2", () => {
    render(
      <CourseCard {...props} fee_waivers={[mockFeeWaiver, mockFeeWaiver]} />
    );

    const link = screen.getByLabelText(/view scholarships/i);
    const scholarshipCount = screen.getByText(/2 scholarships available/i);
    const scholarshipTitle = screen.queryByText(mockFeeWaiver.title);
    const scholarshipDesc = screen.queryByText(
      mockFeeWaiver.promotional_scholarship
    );

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      LinkRoutes.CourseScholarships(props.course_id)
    );
    expect(scholarshipCount).toBeInTheDocument();
    expect(scholarshipTitle).toBeNull();
    expect(scholarshipDesc).toBeNull();
  });
});
