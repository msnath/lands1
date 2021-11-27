import { TAlgoliaRefinementAttribute } from "$/types/algolia.type";
import S from "./AlgoliaFilter.styled";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import React from "react";
import { useReduxSelector } from "@/hooks/useRedux.hook";

type AlgoliaFilterCombinedProps = {
  filters: number;
  svg: SvgElems;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const AlgoliaFilterCombined: React.FC<AlgoliaFilterCombinedProps> = ({
  filters,
  svg,
  onClick,
}) => {
  const title =
    filters > 0
      ? `${filters} ${filters === 1 ? "Filter" : "Filters"} Selected`
      : `Add Filters`;

  return (
    <S.Filters using={filters > 0} aria-label="Filter" onClick={onClick}>
      <S.Indicator>
        {filters > 0 ? <S.SvgUsingFilters svg={svg} /> : <SvgElem svg={svg} />}
      </S.Indicator>
      <S.Separator />
      <S.Text>{title}</S.Text>
    </S.Filters>
  );
};

type AlgoliaFilterProps = {
  title: string;
  attribute: TAlgoliaRefinementAttribute;
  svg: SvgElems;
  focused: boolean;
};

const AlgoliaFilter: React.FC<AlgoliaFilterProps> = ({
  title,
  attribute,
  svg,
  focused,
}) => {
  const indicator = useReduxSelector((state) => {
    const searchState = state.Algolia.searchState;
    switch (attribute) {
      case "category_name":
      case "country_name":
      case "institute_name": {
        const facets = searchState.refinementList ?? {};
        const items: string[] = facets[attribute] ?? [];
        return items.length;
      }

      case "level_name": {
        const menu = searchState.menu ?? {};
        const item: string = menu[attribute];
        return !!item;
      }

      case "tuition_fee.tuition_fee_in_usd": {
        const range = searchState.range ?? {};
        const budget = range[attribute] ?? {};
        const min = budget.min;
        const max = budget.max;
        return !!(min || max);
      }

      default:
        return false;
    }
  });

  const using = !!indicator;

  return (
    <S.Filter focused={focused} using={using} aria-label={`${title} filter`}>
      <S.Indicator>
        {((typeof indicator === "number" && indicator === 0) ||
          (typeof indicator === "boolean" && indicator === false)) && (
          <SvgElem svg={svg} />
        )}

        {typeof indicator === "number" && indicator > 0 && (
          <S.Count>{indicator}</S.Count>
        )}
        {typeof indicator === "boolean" && indicator === true && (
          <S.SvgUsing svg={svg} />
        )}
      </S.Indicator>

      <S.Separator />

      <S.Text>{title}</S.Text>
    </S.Filter>
  );
};

export default AlgoliaFilter;
