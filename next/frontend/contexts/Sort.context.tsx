import { AlgoliaIndex } from "@/configs/algolia.config";
import React from "react";

type TSortContext = {
  sort: AlgoliaIndex;
  sorts: AlgoliaIndex[];
  setSort: React.Dispatch<React.SetStateAction<AlgoliaIndex>>;
};

const SortContext = React.createContext<TSortContext>({
  sort: AlgoliaIndex.INSTITUTE_POPULARITY,
  sorts: [],
  setSort: () => {},
});

export default SortContext;
