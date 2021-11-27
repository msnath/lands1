import { connectCurrentRefinements } from "react-instantsearch-dom";
import {
  CurrentRefinementsExposed,
  CurrentRefinementsProvided,
} from "react-instantsearch-core";
import { TAlgoliaRefinementAttribute } from "$/types/algolia.type";
import styles from "./AlgoliaClearFilter.module.scss";

type AlgoliaClearFilterProps = {
  attribute: TAlgoliaRefinementAttribute;
  onClick?: () => void;
} & CurrentRefinementsExposed &
  CurrentRefinementsProvided;

const AlgoliaClearFilter: React.FC<AlgoliaClearFilterProps> = ({
  attribute,
  onClick,
  items,
  refine,
}) => {
  const _onClick = () => {
    refine(items.filter((item) => item.attribute === attribute));
    if (onClick) onClick();
  };

  return (
    <button
      className={styles.button}
      onClick={_onClick}
      disabled={!items.length}
    >
      CLEAR ALL
    </button>
  );
};

export default connectCurrentRefinements(AlgoliaClearFilter);
