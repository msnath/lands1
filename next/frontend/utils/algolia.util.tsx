import { TTab } from "@/redux/reducers/tab.reducer";

type AlgoliaConfig = {
  hitsPerPage?: number;
  filters?: string;
};

const institutesConfig: AlgoliaConfig = {
  hitsPerPage: 6,
  filters: "is_active=1",
};

const coursesConfig: AlgoliaConfig = {
  hitsPerPage: 6,
  filters: "is_active=1 AND institute_is_active=1",
};

const searchConfig = (tab: TTab): AlgoliaConfig => {
  switch (tab) {
    case "UNIVERSITIES":
      return { ...institutesConfig, hitsPerPage: 20 };
    case "COURSES":
      return { ...coursesConfig, hitsPerPage: 20 };
    default:
      return { hitsPerPage: 20 };
  }
};

const findCourseConfig = (institute_name: string): AlgoliaConfig => ({
  hitsPerPage: 4,
  filters: `is_active=1 AND institute_is_active=1 AND institute_name:"${institute_name}"`,
});

const AlgoliaUtil = {
  institutesConfig,
  coursesConfig,
  searchConfig,
  findCourseConfig,
};

export default AlgoliaUtil;
