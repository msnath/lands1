import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { SearchBoxProvided, SearchBoxExposed } from "react-instantsearch-core";
import { useDebounce } from "react-use";
import Search from "@/components/molecules/Search/Search";
import useSearch from "@/hooks/useSearch.hook";

type AlgoliaSearchBoxProps = {
  inputRef?: React.RefObject<HTMLInputElement>;
  delay?: number;
  simple?: boolean;
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
} & SearchBoxProvided &
  SearchBoxExposed;

const AlgoliaSearchBox: React.FC<AlgoliaSearchBoxProps> = ({
  inputRef,
  delay = 250,
  simple,
  input,
  refine,
}) => {
  const { value } = useSearch();
  useDebounce(() => refine(value), delay, [value]);

  return simple ? (
    <Search.Simple input={input} ref={inputRef} />
  ) : (
    <Search.Maximized input={input} ref={inputRef} />
  );
};

export default connectSearchBox(AlgoliaSearchBox);
