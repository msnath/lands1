import React from "react";

export type TUseShowMoreProps = {
  showMore: boolean;
  limit: number;
  showMoreLimit: number;
  onShowMore: () => void;
  checkHasMore: (curr: number) => boolean;
};

const useShowMore = (initLimit: number): TUseShowMoreProps => {
  const [limit, setLimit] = React.useState(initLimit);

  const onShowMore = () => setLimit((v) => v + 20);

  const checkHasMore = (curr: number) => curr >= limit;

  return {
    showMore: true,
    limit: 20,
    showMoreLimit: limit,
    onShowMore,
    checkHasMore,
  };
};

export default useShowMore;
