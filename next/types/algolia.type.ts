export type TAlgoliaRefinementAttribute =
  | "institute_name"
  | "country_name"
  | "level_name"
  | "category_name"
  | "tuition_fee.tuition_fee_in_usd";

export type AlgoliaPaginationPseudoProps = {
  currentRefinement: number;
  nbPages: number;
  refine: (page: number) => void;
  createURL: (page: number) => string;
};
