import React from "react";
import { render, screen } from "@testing-library/react";
import { TestIDs } from "@/utils/test.util";
import DetailsBreadcrumb, { DetailsBreadcrumbProps } from "./DetailsBreadcrumb";
import LinkMock from "@/__mocks__/link.mock";
import LinkRoutes from "@/routes/LinkRoutes.route";

const props: DetailsBreadcrumbProps = {
  crumbs: [
    { text: "Link 0", link: LinkMock + "0" },
    { text: "Link 1", link: LinkMock + "1" },
    { text: "Link 2", link: LinkMock + "2" },
  ],
};

describe("DetailsBreadcrumb", () => {
  it("renders to the DOM", () => {
    render(<DetailsBreadcrumb {...props} />);

    const elem = screen.getByTestId(TestIDs.DetailsBreadcrumb);
    const homeLink = screen.getByText("Home");
    const links = screen.getAllByText(/link/i);

    expect(elem).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", LinkRoutes.Home);

    expect(links).toHaveLength(props.crumbs.length);
    for (let i = 0; i < links.length; i++) {
      expect(links[i]).toBeInTheDocument();
      expect(links[i]).toHaveTextContent(props.crumbs[i].text);
      expect(links[i]).toHaveAttribute("href", props.crumbs[i].link);
    }
  });
});
