import { connectInfiniteHits } from "react-instantsearch-dom";
import { InfiniteHitsProvided } from "react-instantsearch-core";
import React, { PropsWithChildren } from "react";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import styles from "./AlgoliaInfiniteHits.module.scss";

type AlgoliaHit = { objectID: string };

type AlgoliaInfiniteHitsProps<T extends AlgoliaHit> = {
  Component: React.FC<T>;
} & InfiniteHitsProvided<T>;

const AlgoliaInfiniteHits = <U extends AlgoliaHit>({
  Component,
  hits,
  hasMore,
  refineNext,
}: PropsWithChildren<AlgoliaInfiniteHitsProps<U>>) => {
  Component.displayName = "AlgoliaInfiniteHits";

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((e) => e.isIntersecting && hasMore && refineNext());
    };

    const observer = new IntersectionObserver(onIntersect);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, hasMore, refineNext]);

  return (
    <section className={styles.container}>
      <ul className={styles.grid}>
        {hits.map((hit) => (
          <Component key={hit.objectID} {...hit} />
        ))}

        <li className={styles.sentinel}>
          {hasMore && <SvgElem svg={SvgElems.IconEllipse} />}
          <div ref={ref} className={styles.sentinel_border}></div>
        </li>
      </ul>
    </section>
  );
};

const GenerateAlgoliaInfiniteHits = <T extends AlgoliaHit>() =>
  connectInfiniteHits<AlgoliaInfiniteHitsProps<T>, T>(AlgoliaInfiniteHits);

export default GenerateAlgoliaInfiniteHits;
