import React from "react";
import AlgoliaSearchBox from "../AlgoliaSearchBox/AlgoliaSearchBox";
import styles from "./AlgoliaSearchHeader.module.scss";
import { connectStateResults } from "react-instantsearch-dom";
import { StateResultsProvided } from "react-instantsearch-core";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import Link from "next/link";
import LinkRoutes from "@/routes/LinkRoutes.route";
import NavContext from "@/contexts/Nav.context";

enum Results {
  UNIVERSITY = "University Results",
  COURSE = "Course Results",
}

type AlgoliaSearchHeaderProps = StateResultsProvided;

const _AlgoliaSearchHeader: React.FC<AlgoliaSearchHeaderProps> = ({
  searchState,
  allSearchResults,
}) => {
  const { trigger } = React.useContext(NavContext);

  const end =
    (allSearchResults?.page ?? 0) * (allSearchResults?.hitsPerPage ?? 0) +
    (allSearchResults?.hits.length ?? 0);
  const total = allSearchResults?.nbHits ?? 0;
  const query = searchState?.query ?? "";

  const currentIndex = allSearchResults?.index?.includes("institute")
    ? Results.UNIVERSITY
    : allSearchResults?.index?.includes("course")
    ? Results.COURSE
    : "";

  const switchIndex =
    currentIndex === Results.UNIVERSITY
      ? "Switch to " + Results.COURSE
      : currentIndex === Results.COURSE
      ? "Switch to " + Results.UNIVERSITY
      : "";

  const switchURL =
    currentIndex === Results.UNIVERSITY
      ? LinkRoutes.Courses
      : currentIndex === Results.COURSE
      ? LinkRoutes.Universities
      : LinkRoutes.Universities;

  return (
    <header className={styles.search_header}>
      <div className={styles.display}>
        <div className={styles.count_container}>
          <p className={styles.count}>
            Showing <span>{end}</span> of <span>{total}</span> results
            {query ? " for:" : ""}
          </p>

          <p className={styles.query}>{query}</p>
        </div>

        <div className={styles.switch}>
          <p>Currently Displaying</p>
          <Link href={switchURL}>
            <a className={styles.switch_box}>
              <SvgElem svg={SvgElems.IconSwitch} />
              <div />
              <div>
                <p>{currentIndex.toLocaleUpperCase()}</p>
                <p>{switchIndex}</p>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div ref={trigger} className={styles.search_box}>
        <AlgoliaSearchBox />
      </div>
    </header>
  );
};

const AlgoliaSearchHeader = connectStateResults(_AlgoliaSearchHeader);

export default AlgoliaSearchHeader;
