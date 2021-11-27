import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsContactCounsellor from "./DetailsContactCounsellor";
import LinkRoutes from "@/routes/LinkRoutes.route";

describe("DetailsContactCounsellor", () => {
  it("renders to the DOM", () => {
    render(<DetailsContactCounsellor institute_id={1} />);

    const elem = screen.getByTestId(TestIDs.DetailsContactCounsellor);
    const link = screen.getByText(/speak to a counsellor/i);

    expect(elem).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", LinkRoutes.Scholarship(1));
  });
});
