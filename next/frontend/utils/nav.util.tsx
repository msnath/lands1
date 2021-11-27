import { AlgoliaIndex } from "@/configs/algolia.config";
import LinkRoutes from "@/routes/LinkRoutes.route";

export type NavData = {
  text: string;
  searchState: any;
  instituteSort?: AlgoliaIndex;
  courseSort?: AlgoliaIndex;
};

const level = (value: string) => ({ menu: { level_name: value } });

const country = (value: string) => ({
  refinementList: { country_name: [value] },
});

const category = (value: string) => ({
  refinementList: { category_name: [value] },
});

const institutesSearch = (country: string) => ({
  refinementList: { country_name: [country] },
});

const coursesSearch = (props: {
  country?: string;
  level?: string;
  category?: string;
  query?: string;
}) => ({
  query: props.query || "",
  menu: { level_name: props.level || "" },
  refinementList: {
    country_name: props.country ? [props.country] : "",
    category_name: props.category ? [props.category] : "",
  },
});

const Suggestions: {
  [key: string]: { title: string; route: string; items: NavData[] };
} = {
  UNIVERSITY_LEVELS: {
    title: "Education Level",
    route: LinkRoutes.Universities,
    items: [
      { text: "Diploma", searchState: level("Diploma") },
      { text: "Foundation", searchState: level("Foundation") },
      { text: "Undergraduate", searchState: level("Undergraduate") },
      { text: "Postgraduate", searchState: level("Postgraduate") },
      { text: "Doctorate (PhD)", searchState: level("PhD") },
    ],
  },
  UNIVERSITY_COUNTRIES: {
    title: "Countries",
    route: LinkRoutes.Universities,
    items: [
      {
        text: "United Arab Emirates",
        searchState: country("United Arab Emirates"),
      },
      {
        text: "Canada",
        searchState: country("Canada"),
      },
      {
        text: "United Kingdom",
        searchState: country("United Kingdom"),
      },
      {
        text: "United States of America",
        searchState: country("United States of America"),
      },
    ],
  },
  UNIVERSITY_SEARCHES: {
    title: "Popular Searches",
    route: LinkRoutes.Universities,
    items: [
      {
        text: "Most affordable universities in Dubai",
        searchState: institutesSearch("United Arab Emirates"),
        instituteSort: AlgoliaIndex.INSTITUTE_TUITION_FEE,
      },
      {
        text: "Most affordable universities in Canada",
        searchState: institutesSearch("Canada"),
        instituteSort: AlgoliaIndex.INSTITUTE_TUITION_FEE,
      },
      {
        text: "Most affordable universities in the UK",
        searchState: institutesSearch("United Kingdom"),
        instituteSort: AlgoliaIndex.INSTITUTE_TUITION_FEE,
      },
      {
        text: "Most affordable universities in the USA",
        searchState: institutesSearch("United States of America"),
        instituteSort: AlgoliaIndex.INSTITUTE_TUITION_FEE,
      },
      {
        text: "Top ranked universities in Dubai",
        searchState: institutesSearch("United Arab Emirates"),
        instituteSort: AlgoliaIndex.INSTITUTE_QS_RANK,
      },
      {
        text: "Top ranked universities in Canada",
        searchState: institutesSearch("Canada"),
        instituteSort: AlgoliaIndex.INSTITUTE_QS_RANK,
      },
      {
        text: "Top ranked universities in the UK",
        searchState: institutesSearch("United Kingdom"),
        instituteSort: AlgoliaIndex.INSTITUTE_QS_RANK,
      },
      {
        text: "Top ranked universities in the USA",
        searchState: institutesSearch("United States of America"),
        instituteSort: AlgoliaIndex.INSTITUTE_QS_RANK,
      },
      {
        text: "Most popular universities in Dubai",
        searchState: institutesSearch("United Arab Emirates"),
        instituteSort: AlgoliaIndex.INSTITUTE_POPULARITY,
      },
      {
        text: "Most popular universities in Canada",
        searchState: institutesSearch("Canada"),
        instituteSort: AlgoliaIndex.INSTITUTE_POPULARITY,
      },
      {
        text: "Most popular universities in the UK",
        searchState: institutesSearch("United Kingdom"),
        instituteSort: AlgoliaIndex.INSTITUTE_POPULARITY,
      },
      {
        text: "Most popular universities in the USA",
        searchState: institutesSearch("United States of America"),
        instituteSort: AlgoliaIndex.INSTITUTE_POPULARITY,
      },
    ],
  },
  COURSE_LEVELS: {
    title: "Education Level",
    route: LinkRoutes.Courses,
    items: [
      { text: "Diploma", searchState: level("Diploma") },
      { text: "Foundation", searchState: level("Foundation") },
      { text: "Undergraduate", searchState: level("Undergraduate") },
      { text: "Postgraduate", searchState: level("Postgraduate") },
      { text: "Doctorate (PhD)", searchState: level("PhD") },
    ],
  },
  COURSE_CATEGORIES: {
    title: "Categories",
    route: LinkRoutes.Courses,
    items: [
      {
        text: "Business & Management",
        searchState: category("Business & Management"),
      },
      {
        text: "Engineering",
        searchState: category("Engineering"),
      },
      {
        text: "Computer Science & IT",
        searchState: category("Computer Science & IT"),
      },
      {
        text: "Art, Design & Architecture",
        searchState: category("Art, Design & Architecture"),
      },
    ],
  },
  COURSE_SEARCHES: {
    title: "Popular Searches",
    route: LinkRoutes.Courses,
    items: [
      {
        text: "Most affordable Psychology programs in Canada",
        searchState: coursesSearch({
          country: "Canada",
          query: "Psychology",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Interior Design programs in Canada",
        searchState: coursesSearch({
          country: "Canada",
          query: "Interior Design",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Computer Science programs in Canada",
        searchState: coursesSearch({
          country: "Canada",
          category: "Computer Science & IT",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable MBA programs in Canada",
        searchState: coursesSearch({
          country: "Canada",
          level: "Postgraduate",
          category: "Business & Management",
          query: "MBA",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable BBA programs in the UK",
        searchState: coursesSearch({
          country: "United Kingdom",
          level: "Undergraduate",
          category: "Business & Management",
          query: "Business Administration",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Computer Science programs in the UK",
        searchState: coursesSearch({
          country: "United Kingdom",
          category: "Computer Science & IT",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable MBA programs in the UK",
        searchState: coursesSearch({
          country: "United Kingdom",
          level: "Postgraduate",
          category: "Business & Management",
          query: "MBA",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Engineering programs in the UK",
        searchState: coursesSearch({
          country: "United Kingdom",
          category: "Engineering",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Finance programs in Dubai",
        searchState: coursesSearch({
          country: "United Arab Emirates",
          category: "Business & Management",
          query: "Finance",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Computer Science programs in Dubai",
        searchState: coursesSearch({
          country: "United Arab Emirates",
          category: "Computer Science & IT",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Marketing programs in Dubai",
        searchState: coursesSearch({
          country: "United Arab Emirates",
          query: "Marketing",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
      {
        text: "Most affordable Engineering programs in Dubai",
        searchState: coursesSearch({
          country: "United Arab Emirates",
          category: "Engineering",
        }),
        courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
      },
    ],
  },
};

export type TSuggestions =
  | "UNIVERSITY_LEVELS"
  | "UNIVERSITY_COUNTRIES"
  | "UNIVERSITY_SEARCHES"
  | "COURSE_LEVELS"
  | "COURSE_CATEGORIES"
  | "COURSE_SEARCHES";

const NavUtil = { Suggestions };

export default NavUtil;
