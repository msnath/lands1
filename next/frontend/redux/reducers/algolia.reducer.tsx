import { AlgoliaIndex } from "@/configs/algolia.config";
import { AlgoliaActionType } from "@/redux/actions/algolia.action";

export type TAlgoliaState = {
  instituteSort: AlgoliaIndex;
  instituteSorts: AlgoliaIndex[];
  courseSort: AlgoliaIndex;
  courseSorts: AlgoliaIndex[];
  searchState: Record<string, any>;
};

export type TAlgoliaAction = {
  type: string;
  payload: {
    instituteSort?: AlgoliaIndex;
    courseSort?: AlgoliaIndex;
    searchState?: any;
    query?: string;
  };
};

const initState: TAlgoliaState = {
  instituteSort: AlgoliaIndex.INSTITUTE_POPULARITY,
  instituteSorts: [
    AlgoliaIndex.INSTITUTE_POPULARITY,
    AlgoliaIndex.INSTITUTE_TUITION_FEE,
    AlgoliaIndex.INSTITUTE_QS_RANK,
  ],
  courseSort: AlgoliaIndex.COURSE_TUITION_FEE,
  courseSorts: [
    AlgoliaIndex.COURSE_TUITION_FEE,
    // AlgoliaIndex.COURSE_QS_RANK,
    AlgoliaIndex.COURSE_DURATION,
  ],
  searchState: {},
};

const AlgoliaReducer = (
  state: TAlgoliaState = initState,
  action: TAlgoliaAction
): TAlgoliaState => {
  if (!action.payload) return state;

  const { instituteSort, courseSort, searchState, query } = action.payload;

  switch (action.type) {
    case AlgoliaActionType.SORT:
      if (instituteSort !== undefined) return { ...state, instituteSort };
      if (courseSort !== undefined) return { ...state, courseSort };
      break;

    case AlgoliaActionType.SEARCH_STATE:
      if (searchState !== undefined) return { ...state, searchState };
      break;

    case AlgoliaActionType.QUERY:
      if (query !== undefined)
        return { ...state, searchState: { ...state.searchState, query } };
  }

  return state;
};

export default AlgoliaReducer;
