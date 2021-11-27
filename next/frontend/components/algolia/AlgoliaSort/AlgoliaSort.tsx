import { useBackdrop } from "@/components/atoms/Backdrop/Backdrop";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import Radio from "@/components/atoms/Radio/Radio";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import useDimensions from "@/hooks/useDimensions.hook";
import Algolia, { AlgoliaIndex } from "frontend/configs/algolia.config";
import React from "react";
import S from "./AlgoliaSort.styled";
import dynamic from "next/dynamic";
import { connectPagination } from "react-instantsearch-dom";
import { AlgoliaPaginationPseudoProps } from "$/types/algolia.type";

const Backdrop = dynamic(() => import("@/components/atoms/Backdrop/Backdrop"));

type AlgoliaSortHeaderProps = { sort: AlgoliaIndex; focused: boolean };

const AlgoliaSortHeader: React.FC<AlgoliaSortHeaderProps> = ({
  sort,
  focused,
}) => {
  const { is576 } = useDimensions();

  return (
    <S.Sort focused={focused} aria-label="Sort by">
      <S.Icon>
        <SvgElem svg={SvgElems.IconSort} />
      </S.Icon>
      {is576 && (
        <>
          <S.Separator />
          <S.Text>{Algolia.getSortTitle(sort)}</S.Text>
        </>
      )}
    </S.Sort>
  );
};

type AlgoliaSortOptionsProps = {
  sort: AlgoliaIndex;
  sorts: AlgoliaIndex[];
  onClick: (index: AlgoliaIndex) => void;
};

const AlgoliaSortOptions: React.FC<AlgoliaSortOptionsProps> = ({
  sort,
  sorts,
  onClick,
}) => {
  return (
    <S.Options onClick={(e) => e.stopPropagation()}>
      <S.Title>Sort By</S.Title>
      {sorts.map((s, i) => (
        <Radio
          key={i}
          checked={s === sort}
          onClick={() => onClick(s)}
          text={Algolia.getSortTitle(s)}
        />
      ))}
    </S.Options>
  );
};

type AlgoliaSortProps = AlgoliaSortHeaderProps &
  AlgoliaSortOptionsProps &
  AlgoliaPaginationPseudoProps;

const AlgoliaSort: React.FC<AlgoliaSortProps> = ({
  sort,
  sorts,
  onClick,
  refine,
}) => {
  const { focused, setFocused, props } = useBackdrop();
  const { is1280 } = useDimensions();

  const _onClick = (index: AlgoliaIndex) => {
    refine(1);
    onClick(index);
  };

  const SortOptions = (
    <AlgoliaSortOptions sort={sort} sorts={sorts} onClick={_onClick} />
  );
  return (
    <Dropdown focused={focused} onChangeFocus={setFocused} onReclickCollapse>
      <AlgoliaSortHeader sort={sort} focused={focused} />
      {is1280 ? SortOptions : <Backdrop {...props}>{SortOptions}</Backdrop>}
    </Dropdown>
  );
};

export default connectPagination(AlgoliaSort);
