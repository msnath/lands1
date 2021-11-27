import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsInformation, {
  DetailsInformationProps,
} from "./DetailsInformation";

const props: DetailsInformationProps = {
  info: "info text",
  admission_reqs: "admission_reqs text",
};

describe("DetailsInformation", () => {
  it("renders to the DOM, with no props", () => {
    render(<DetailsInformation />);

    const elem = screen.getByTestId(TestIDs.DetailsInformation);
    const infoHead = screen.queryByText(/overview/i);
    const infoBody = screen.queryByText(props.info as string);
    const reqsHead = screen.queryByText(/entry requirements/i);
    const reqsBody = screen.queryByText(props.admission_reqs as string);

    expect(elem).toBeInTheDocument();
    expect(infoHead).toBeNull();
    expect(infoBody).toBeNull();
    expect(reqsHead).toBeNull();
    expect(reqsBody).toBeNull();
  });

  it("renders to the DOM, with info", () => {
    render(<DetailsInformation info={props.info} />);

    const elem = screen.getByTestId(TestIDs.DetailsInformation);
    const infoHead = screen.getByText(/overview/i);
    const infoBody = screen.getByText(props.info as string);
    const reqsHead = screen.queryByText(/entry requirements/i);
    const reqsBody = screen.queryByText(props.admission_reqs as string);

    expect(elem).toBeInTheDocument();
    expect(infoHead).toBeInTheDocument();
    expect(infoBody).toBeInTheDocument();
    expect(reqsHead).toBeNull();
    expect(reqsBody).toBeNull();
  });

  it("renders to the DOM, with admission_reqs", () => {
    render(<DetailsInformation admission_reqs={props.admission_reqs} />);

    const elem = screen.getByTestId(TestIDs.DetailsInformation);
    const infoHead = screen.queryByText(/overview/i);
    const infoBody = screen.queryByText(props.info as string);
    const reqsHead = screen.getByText(/entry requirements/i);
    const reqsBody = screen.getByText(props.admission_reqs as string);

    expect(elem).toBeInTheDocument();
    expect(infoHead).toBeNull();
    expect(infoBody).toBeNull();
    expect(reqsHead).toBeInTheDocument();
    expect(reqsBody).toBeInTheDocument();
  });

  it("renders to the DOM, with info and admission_reqs", () => {
    render(
      <DetailsInformation
        info={props.info}
        admission_reqs={props.admission_reqs}
      />
    );

    const elem = screen.getByTestId(TestIDs.DetailsInformation);
    const infoHead = screen.getByText(/overview/i);
    const infoBody = screen.getByText(props.info as string);
    const reqsHead = screen.getByText(/entry requirements/i);
    const reqsBody = screen.getByText(props.admission_reqs as string);

    expect(elem).toBeInTheDocument();
    expect(infoHead).toBeInTheDocument();
    expect(infoBody).toBeInTheDocument();
    expect(reqsHead).toBeInTheDocument();
    expect(reqsBody).toBeInTheDocument();
  });
});
