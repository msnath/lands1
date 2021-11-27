import React from "react";
import useEventListener from "./useEventListener.hook";

const useAccordian = () => {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState<number>(0);

  const refHeader = React.useRef<HTMLButtonElement>(null);
  const refContent = React.useRef<HTMLDivElement>(null);

  const onToggle = () => {
    if (refHeader.current) refHeader.current.click();
  };

  const toggleCollapse = () => {
    setOpen((v) => !v);
    setHeight(refContent.current?.scrollHeight ?? 0);
  };

  useEventListener(refHeader, "click", toggleCollapse);

  return { refHeader, refContent, open, height, onToggle };
};

export default useAccordian;
