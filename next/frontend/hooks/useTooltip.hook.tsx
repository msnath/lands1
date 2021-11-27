import React from "react";
import ReactTooltip from "react-tooltip";

const useTooltip = <T extends HTMLElement>(tooltip?: string) => {
  const [text, setText] = React.useState<string | undefined>();

  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const elem = ref.current;
    const overflowing = elem ? elem.scrollHeight > elem.clientHeight : false;
    setText(overflowing ? tooltip : undefined);
    ReactTooltip.rebuild();
  }, [ref.current?.scrollHeight, ref.current?.clientHeight, tooltip]);

  return [ref, text] as const;
};

export default useTooltip;
