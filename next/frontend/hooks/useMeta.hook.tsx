import NavContext, {
  defaultDescription,
  defaultTitle,
} from "@/contexts/Nav.context";
import React from "react";

const useMeta = (title: string, description?: string) => {
  const { setTitle, setDescription } = React.useContext(NavContext);

  React.useEffect(() => {
    setTitle(title || defaultTitle);
    setDescription(description || defaultDescription);
  }, [title, description, setTitle, setDescription]);
};

export default useMeta;
