import React from "react";

export const defaultTitle = "Secure My Scholarship";
export const defaultDescription =
  "Start your university journey today with Secure My Scholarship. Access guaranteed scholarships and search from over 1000+ universities and 50000+ courses around the world. Know More";

export const useNavContextValue = () => {
  const [title, setTitle] = React.useState(defaultTitle);
  const [description, setDescription] = React.useState(defaultDescription);
  const [navHeight, setNavHeight] = React.useState(0);
  const trigger = React.useRef<HTMLDivElement>(null);
  const NavContextValue = {
    title,
    description,
    setTitle,
    setDescription,
    trigger,
    navHeight,
    setNavHeight,
  };

  return NavContextValue;
};


type TNavContext = {
  title: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  trigger?: React.RefObject<HTMLDivElement>;
  navHeight: number;
  setNavHeight: React.Dispatch<React.SetStateAction<number>>;
};

const NavContext = React.createContext<TNavContext>({
  title: "",
  description: "",
  setTitle: () => {},
  setDescription: () => {},
  navHeight: 0,
  setNavHeight: () => {},
});

export default NavContext;
