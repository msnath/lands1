import { AlgoliaIndex } from "@/configs/algolia.config";
import { TAlgoliaAction } from "@/redux/reducers/algolia.reducer";

export enum AlgoliaActionType {
  SORT = "ALGOLIA_SORT",
  SEARCH_STATE = "ALGOLIA_SEARCH_STATE",
  QUERY = "ALGOLIA_QUERY",
}

const AlgoliaAction = {
  instituteSort: (instituteSort: AlgoliaIndex): TAlgoliaAction => ({
    type: AlgoliaActionType.SORT,
    payload: { instituteSort },
  }),

  courseSort: (courseSort: AlgoliaIndex): TAlgoliaAction => ({
    type: AlgoliaActionType.SORT,
    payload: { courseSort },
  }),

  searchState: (searchState: any): TAlgoliaAction => ({
    type: AlgoliaActionType.SEARCH_STATE,
    payload: { searchState },
  }),

  query: (query: string): TAlgoliaAction => ({
    type: AlgoliaActionType.QUERY,
    payload: { query },
  }),
};

export default AlgoliaAction;
