import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import ScholarshipCard, { ScholarshipCardProps } from "./ScholarshipCard";
import moment from "moment";
import LinkRoutes from "@/routes/LinkRoutes.route";

const props: ScholarshipCardProps = {
  institute_id: 1,
  fee_waiver_id: 2,
  title: "title text",
  valid_until: new Date(),
  level_name: "level_name text",
  promotional_scholarship: "promotional_scholarship text",
};

describe("ScholarshipCard", () => {
  it("renders to the DOM", () => {
    render(<ScholarshipCard {...props} />);

    const elem = screen.getByTestId(TestIDs.ScholarshipCard);
    const li = screen.getByRole("listitem");
    const title = screen.getByText(props.title);
    const validUntil = screen.getByText(
      moment(props.valid_until).format("MMM DD, YYYY")
    );
    const levelName = screen.getByText(props.level_name);
    const promotionalScholarship = screen.getByText(
      props.promotional_scholarship
    );
    const link = screen.getByRole("link");

    expect(elem).toBeInTheDocument();
    expect(li).toBeInTheDocument();
    expect(elem).toEqual(li);
    expect(title).toBeInTheDocument();
    expect(validUntil).toBeInTheDocument();
    expect(levelName).toBeInTheDocument();
    expect(promotionalScholarship).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      LinkRoutes.Scholarship(props.institute_id)
    );
    expect(link).toHaveTextContent(/secure scholarship/i);
  });
});
