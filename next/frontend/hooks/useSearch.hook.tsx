import AlgoliaAction from "@/redux/actions/algolia.action";
import React from "react";
import { useDebounce } from "react-use";
import { useReduxSelector, useReduxDispatch } from "./useRedux.hook";

const useSearch = () => {
  const query = useReduxSelector(
    (state) => state.Algolia.searchState.query ?? ""
  );
  const dispatch = useReduxDispatch();

  const [value, setValue] = React.useState(query);
  useDebounce(() => dispatch(AlgoliaAction.query(value)), 250, [value]);

  React.useEffect(() => setValue(query), [query]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.currentTarget.value);

  return { value, onChange };
};

export default useSearch;
