import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsHeaderUniversity, {
  DetailsHeaderUniversityProps,
} from "./DetailsHeaderUniversity";
import { MockImage } from "@/components/atoms/ImgElem/ImgElem";
import DetailsHeaderCourse, {
  DetailsHeaderCourseProps,
} from "./DetailsHeaderCourse";
import {
  formatCourseCount,
  formatFeeWaiverCount,
  formatTuitionFee,
} from "@/utils/functions.util";
import LinkRoutes from "@/routes/LinkRoutes.route";

const propsUniversity: DetailsHeaderUniversityProps = {
  institute_id: 1,
  institute_name: "institute_name text",
  country_name: "country_name text",
  qs_rank: 2,
  tuition_fee: {
    currency: "USD",
    undergraduate_value: 54321,
    postgraduate_value: 12345,
  },
  course_count: 3,
  fee_waiver_count: 4,
  images: { logo_img: MockImage.src, banner_img: MockImage.src },
};

const propsCourse: DetailsHeaderCourseProps = {
  course_id: 1,
  course_name: "course_name text",
  duration_tag: "2 Years",
  fee_waiver_count: 3,
  images: { logo_img: MockImage.src, banner_img: MockImage.src },
  institute_id: 2,
  institute_name: "institute_name text",
  tuition_fee: { currency: "USD", value: 12345 },
};

describe("DetailsHeaderUniversity", () => {
  it("renders to the DOM", () => {
    render(<DetailsHeaderUniversity {...propsUniversity} />);

    const elem = screen.getByTestId(TestIDs.DetailsHeaderUniversity);
    const logo = screen.getByAltText(/logo image/i);
    const banner = screen.getByAltText(/banner image/i);
    const instituteName = screen.getByText(propsUniversity.institute_name);
    const countryName = screen.getByText(propsUniversity.country_name);
    const qsRank = screen.getByText(`#${propsUniversity.qs_rank}`);
    const tuitionFeeUG = screen.getByText(
      formatTuitionFee(
        propsUniversity.tuition_fee.currency,
        propsUniversity.tuition_fee.undergraduate_value
      )
    );
    const tuitionFeePG = screen.getByText(
      formatTuitionFee(
        propsUniversity.tuition_fee.currency,
        propsUniversity.tuition_fee.postgraduate_value
      )
    );
    const scholarships = screen.getByText(
      formatFeeWaiverCount(propsUniversity.fee_waiver_count)
    );
    const courses = screen.getByText(
      formatCourseCount(propsUniversity.course_count)
    );
    const secureScholarship = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
    expect(logo).toHaveAttribute("alt");
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute("src");
    expect(banner).toHaveAttribute("alt");
    expect(instituteName).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
    expect(qsRank).toBeInTheDocument();
    expect(tuitionFeeUG).toBeInTheDocument();
    expect(tuitionFeePG).toBeInTheDocument();
    expect(scholarships).toBeInTheDocument();
    expect(courses).toBeInTheDocument();
    expect(secureScholarship).toBeInTheDocument();
    expect(secureScholarship).toHaveTextContent(/secure scholarship/i);
    expect(secureScholarship).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(propsUniversity.institute_id)
    );
  });
});

describe("DetailsHeaderCourse", () => {
  it("renders to the DOM", () => {
    render(<DetailsHeaderCourse {...propsCourse} />);

    const elem = screen.getByTestId(TestIDs.DetailsHeaderCourse);
    const logo = screen.getByAltText(/logo image/i);
    const banner = screen.getByAltText(/banner image/i);
    const courseName = screen.getByText(propsCourse.course_name);
    const instituteName = screen.getByText(propsCourse.institute_name);
    const durationTag = screen.getByText(propsCourse.duration_tag);
    const tuitionFee = screen.getByText(
      formatTuitionFee(
        propsCourse.tuition_fee.currency,
        propsCourse.tuition_fee.value
      )
    );
    const scholarships = screen.getByText(
      formatFeeWaiverCount(propsCourse.fee_waiver_count)
    );
    const secureScholarship = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src");
    expect(logo).toHaveAttribute("alt");
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute("src");
    expect(banner).toHaveAttribute("alt");
    expect(courseName).toBeInTheDocument();
    expect(instituteName).toBeInTheDocument();
    expect(durationTag).toBeInTheDocument();
    expect(tuitionFee).toBeInTheDocument();
    expect(scholarships).toBeInTheDocument();
    expect(secureScholarship).toBeInTheDocument();
    expect(secureScholarship).toHaveTextContent(/secure scholarship/i);
    expect(secureScholarship).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(propsCourse.institute_id, propsCourse.course_id)
    );
  });
});
