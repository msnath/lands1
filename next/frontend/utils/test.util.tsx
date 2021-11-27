import { MatcherFunction } from "@testing-library/react";

export const TestIDs = {
  ArticleCard: "article-card",
  Backdrop: "backdrop",
  Carousel: "carousel",
  Checkbox: "checkbox",
  Dropdown: "dropdown",
  ImgElem: "img-elem",
  Option: "option",
  Radio: "radio",
  SvgElem: "svg-elem",

  SearchSimple: "search-simple",
  SearchMinimized: "search-minimized",
  SearchMaximized: "search-maximized",
  SearchComplex: "search-complex",
  UniversityCard: "university-card",
  UniversityCardMini: "university-card-mini",
  UniversityTile: "university-tile",
  CourseCard: "course-card",
  CourseCardMini: "course-card-mini",
  CourseTile: "course-tile",
  ScholarshipCard: "scholarship-card",
  ScholarshipCardMini: "scholarship-card-mini",
  DetailsBreadcrumb: "details-breadcrumb",
  SecureScholarshipPrompt:"secure-scholarship-prompt",

  DetailsContactCounsellor: "details-contact-counsellor",
  DetailsExploreUniversity: "details-explore-university",
  DetailsFindCourse: "details-find-course",
  DetailsHeaderUniversity: "details-header-university",
  DetailsHeaderCourse: "details-header-course",
  DetailsAccordian: "details-accordian",
  DetailsInformation: "details-information",
};

type Query = (f: MatcherFunction) => HTMLElement | null;

export const withMarkup =
  (query: Query) =>
  (text: string): HTMLElement | null =>
    query((_, node) => {
      if (node) {
        const hasText = (node: Element) => node.textContent === text;
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !hasText(child)
        );
        return hasText(node) && childrenDontHaveText;
      } else {
        return false;
      }
    });
