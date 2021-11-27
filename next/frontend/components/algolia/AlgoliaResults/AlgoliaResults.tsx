import React from "react";
import { connectStateResults } from "react-instantsearch-dom";
import { StateResultsProvided } from "react-instantsearch-core";
import S from "./AlgoliaResults.styled";

type AlgoliaResultsProps = StateResultsProvided;

const _AlgoliaResults: React.FC<AlgoliaResultsProps> = ({
  allSearchResults,
}) => {
  const end =
    (allSearchResults?.page ?? 0) * (allSearchResults?.hitsPerPage ?? 0) +
    (allSearchResults?.hits.length ?? 0);
  const total = allSearchResults?.nbHits ?? 0;

  return (
    <S.Text>
      Showing {end} of {total} results
    </S.Text>
  );
};

const AlgoliaResults = connectStateResults(_AlgoliaResults);

export default AlgoliaResults;
