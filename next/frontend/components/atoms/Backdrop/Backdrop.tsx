import { TestIDs } from "@/utils/test.util";
import React from "react";
import S from "./Backdrop.styled";

export const useBackdrop = (use = true) => {
  const [focused, setFocused] = React.useState(false);

  const onClick: React.MouseEventHandler<HTMLDivElement> = () => {
    if (focused) setFocused(false);
  };

  return { focused, setFocused, props: { use, onClick } };
};

type BackdropProps = { use?: boolean } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ use = true, ...props }, ref) =>
    use ? (
      <S.Backdrop
        data-testid={TestIDs.Backdrop}
        use={use}
        {...props}
        ref={ref}
      />
    ) : (
      <>{props.children}</>
    )
);

Backdrop.displayName = "Backdrop";

export default Backdrop;
