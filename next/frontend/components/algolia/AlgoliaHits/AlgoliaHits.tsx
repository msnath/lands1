import { connectHits } from "react-instantsearch-dom";
import { HitsProvided } from "react-instantsearch-core";
import { PropsWithChildren } from "react";
import S from "./AlgoliaHits.styled";

type AlgoliaHit = { objectID: string };

type AlgoliaHitsProps<T extends AlgoliaHit> = {
  Component: React.FC<T>;
} & HitsProvided<T>;

const AlgoliaHits = <U extends AlgoliaHit>({
  Component,
  hits,
}: PropsWithChildren<AlgoliaHitsProps<U>>) => {
  return (
    <S.UL>
      {hits.map((hit) => (
        <Component key={hit.objectID} {...hit} />
      ))}
    </S.UL>
  );
};

const GenerateAlgoliaHits = <T extends AlgoliaHit>() =>
  connectHits<AlgoliaHitsProps<T>, T>(AlgoliaHits);

export default GenerateAlgoliaHits;
