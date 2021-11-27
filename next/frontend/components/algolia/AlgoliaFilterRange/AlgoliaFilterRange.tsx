import React from "react";
import styles from "./AlgoliaFilterRange.module.scss";
import { connectRange } from "react-instantsearch-dom";
import { ConnectedComponentClass } from "react-instantsearch-core";
import AlgoliaClearFilter from "../AlgoliaClearFilter/AlgoliaClearFilter";
import { TAlgoliaRefinementAttribute } from "$/types/algolia.type";
import { useDebounce } from "react-use";
import { TApiCountry } from "$/types/country.type";
import ApiRoutes from "@/routes/ApiRoutes.route";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import Option from "@/components/atoms/Option/Option";
import Algolia, { AlgoliaIndex } from "frontend/configs/algolia.config";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import useAsyncEffect, { TAsyncEffect } from "@/hooks/useAsyncEffect.hook";
import List from "react-virtualized/dist/commonjs/List";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

type Range = { min?: number; max?: number };

type RangeProvided = Range & {
  currentRefinement: Range;
  precision: number;
  refine: (range: Range) => any;
  createURL: (...args: any[]) => any;
};

type RangeExposed = Range & {
  attribute: string;
  precision?: number;
};

type AlgoliaFilterRangeProps = {
  title: string;
  attribute: TAlgoliaRefinementAttribute;
} & RangeProvided &
  RangeExposed;

const AlgoliaFilterRange: React.FC<AlgoliaFilterRangeProps> = ({
  title,
  attribute,
  refine,
  createURL,
}) => {
  const [rate, setRate] = React.useState(1);
  const [country, setCountry] = React.useState<TApiCountry | null>(null);
  const [countries, setCountries] = React.useState<TApiCountry[]>([]);
  const [min, setMin] = React.useState<number | undefined>(undefined);
  const [max, setMax] = React.useState<number | undefined>(undefined);

  const [invalid, setInvalid] = React.useState(false);

  useDebounce(
    () => {
      const range = {
        min: min && rate ? min * rate : undefined,
        max: max && rate ? max * rate : undefined,
      };

      if (range.min && range.max && range.min > range.max) {
        setInvalid(true);
      } else {
        setInvalid(false);
        refine(range);
        createURL(range);
      }
    },
    250,
    [min, max, rate]
  );

  const populateCountries: TAsyncEffect = React.useCallback(async (mounted) => {
    const res = await ApiRoutes.countries();
    const ctr = res.find((c) => c.country.currency === "AED");
    const results = res
      .sort((a, b) => a.country.name.localeCompare(b.country.name))
      .filter((c) => c.country.currency && c.country.name);

    if (mounted()) {
      setCountry(ctr ?? null);
      setCountries(results);
    }
  }, []);

  const updateRate: TAsyncEffect = React.useCallback(
    async (mounted) => {
      if (!country) return;
      const idx = AlgoliaIndex.CURRENCY;
      const facetFilters = `currency_code: ${country.country.currency}`;
      const res = await Algolia.Client.initIndex(idx).search<any>("", {
        facetFilters,
      });
      if (mounted() && res.hits.length >= 1) {
        setRate(res.hits[0].exchange_rate_to_usd);
      }
    },
    [country]
  );

  useAsyncEffect(populateCountries, []);
  useAsyncEffect(updateRate, [country]);

  const onChangeMin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const num = parseInt(e.target.value);
    setMin(isNaN(num) ? undefined : num);
  };

  const onChangeMax: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const num = parseInt(e.target.value);
    setMax(isNaN(num) ? undefined : num);
  };

  const onClickReset = () => {
    setMin(undefined);
    setMax(undefined);
  };

  const optionStr = (c: TApiCountry) =>
    c.country.currency + " - " + c.country.name;

  return (
    <div className={styles.filter_range}>
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
        <div className={styles.clear}>
          <AlgoliaClearFilter attribute={attribute} onClick={onClickReset} />
        </div>
      </div>

      <div className={styles.currency}>
        <Dropdown onReclickCollapse>
          <button className={styles.selected}>
            <Option
              img={country ? country.country.flag_img : ""}
              text={country ? optionStr(country) : "- Select -"}
            />
          </button>
          <div className={styles.menu}>
            <AutoSizer>
              {({ height, width }) => (
                <List
                  rowCount={countries.length}
                  width={width}
                  height={height}
                  rowHeight={48}
                  rowRenderer={({ index, key, style }) => (
                    <button
                      key={key}
                      className={styles.button}
                      style={style}
                      onClick={() => setCountry(countries[index])}
                    >
                      <Option
                        img={countries[index].country.flag_img}
                        text={optionStr(countries[index])}
                      />
                    </button>
                  )}
                />
              )}
            </AutoSizer>
          </div>
        </Dropdown>
      </div>

      <div className={styles.min_max}>
        <label htmlFor="min">Min. Amount</label>
        <input
          type="number"
          name="min"
          value={min ?? ""}
          onChange={onChangeMin}
          placeholder="Enter a value"
        />

        <label htmlFor="max">Max. Amount</label>
        <input
          type="number"
          name="max"
          value={max ?? ""}
          onChange={onChangeMax}
          placeholder="Enter a value"
        />
      </div>

      {invalid && (
        <div className={styles.error}>
          <SvgElem svg={SvgElems.IconError} />
          <p>The minimum amount cannot exceed the maximum amount</p>
        </div>
      )}
    </div>
  );
};

const TypedAlgoliaFilterRange: ConnectedComponentClass<
  AlgoliaFilterRangeProps,
  RangeProvided,
  RangeExposed
> = connectRange(AlgoliaFilterRange);

export default TypedAlgoliaFilterRange;
