import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";
import { ImgElems } from "../ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import { TestIDs } from "@/utils/test.util";

const props: ArticleCardProps = {
  img: ImgElems.ArticleCNN,
  href: LinkRoutes.Articles.CNN,
};

describe("ArticleCard", () => {
  it("renders to the DOM", () => {
    render(<ArticleCard {...props} />);

    const elem = screen.getByTestId(TestIDs.ArticleCard);

    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute("href", props.href);
  });

  it("contains an img", () => {
    render(<ArticleCard {...props} />);

    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
    expect(img).toHaveAttribute("alt");
  });
});
