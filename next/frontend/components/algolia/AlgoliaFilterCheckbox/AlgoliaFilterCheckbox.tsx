import { connectRefinementList } from "react-instantsearch-dom";
import {
  RefinementListProvided,
  RefinementListExposed,
} from "react-instantsearch-core";
import styles from "./AlgoliaFilterCheckbox.module.scss";
import { TAlgoliaRefinementAttribute } from "$/types/algolia.type";
import AlgoliaClearFilter from "../AlgoliaClearFilter/AlgoliaClearFilter";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import { useDebounce, useDeepCompareEffect } from "react-use";
import React from "react";
import { TUseShowMoreProps } from "@/hooks/useShowMore.hook";

type AlgoliaFilterCheckboxProps = {
  title: string;
  attribute: TAlgoliaRefinementAttribute;
  hideCount?: boolean;
} & TUseShowMoreProps &
  RefinementListProvided &
  RefinementListExposed;

const AlgoliaFilterCheckbox: React.FC<AlgoliaFilterCheckboxProps> = ({
  title,
  attribute,
  hideCount,
  items,
  onShowMore,
  checkHasMore,
  refine,
  searchForItems,
  createURL,
}) => {
  const [search, setSearch] = React.useState("");
  useDebounce(() => searchForItems(search), 250, [search]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.currentTarget.value);

  const onClick =
    (value: string[]): React.MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      e.preventDefault();
      refine(value);
    };

  const refinedItems = items.filter((item) => item.isRefined);

  useDeepCompareEffect(() => {
    if (checkHasMore) checkHasMore(items.length);
  }, [items]);

  return (
    <div className={styles.filter_checkbox}>
      <div className={styles.head}>
        <p className={styles.title}>{title}</p>
        <div className={styles.clear}>
          <AlgoliaClearFilter attribute={attribute} />
        </div>
        <input
          className={styles.search}
          type="search"
          onChange={onChange}
          placeholder={`Search for ${title.toLowerCase()}`}
        />
        <p className={styles.selected}>
          {refinedItems.length > 0 && `Selected (${refinedItems.length})`}
        </p>
      </div>

      <ul className={styles.options}>
        {items.map((item) => (
          <li key={item.label}>
            <a href={createURL(item.value)} onClick={onClick(item.value)}>
              <Checkbox
                text={`${item.label} ${hideCount ? `` : `(${item.count})`}`}
                checked={item.isRefined}
                onClick={() => {}}
              />
            </a>
          </li>
        ))}

        {onShowMore && checkHasMore && checkHasMore(items.length) && (
          <li className={styles.load_more} onClick={onShowMore}>
            <button>Show more . . .</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default connectRefinementList(AlgoliaFilterCheckbox);
