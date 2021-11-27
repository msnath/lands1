import algoliasearch from "algoliasearch/lite";
import Env from "./env.config";

export enum AlgoliaIndex {
  INSTITUTE = "institute",
  INSTITUTE_POPULARITY = "institute_popularity_desc",
  INSTITUTE_TUITION_FEE = "institute_tuition_fee_asc",
  INSTITUTE_QS_RANK = "institute_qs_rank_asc",
  COURSE = "course",
  COURSE_TUITION_FEE = "course_tuition_fee_asc",
  COURSE_DURATION = "course_duration_asc",
  // COURSE_QS_RANK = "course_qs_rank_asc",
  CURRENCY = "currency",
}

const Client = algoliasearch(Env.ALGOLIA_APP, Env.ALGOLIA_KEY);

const getSortTitle = (index: AlgoliaIndex): string => {
  switch (index) {
    case AlgoliaIndex.INSTITUTE_POPULARITY:
      return "Popularity (Highest First)";

    case AlgoliaIndex.INSTITUTE_TUITION_FEE:
      return "Annual Fees (Lowest First)";

    case AlgoliaIndex.INSTITUTE_QS_RANK:
      return "QS Rank (Highest First)";

    case AlgoliaIndex.COURSE_TUITION_FEE:
      return "Annual Fees (Lowest First)";

    case AlgoliaIndex.COURSE_DURATION:
      return "Duration (Shortest First)";

    // case AlgoliaIndex.COURSE_QS_RANK:
    //   return "QS Rank (Highest First)";

    default:
      return "Sort Unavailable";
  }
};

const Algolia = { Client, getSortTitle };

export default Algolia;
