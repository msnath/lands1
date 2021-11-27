import { ToastLoadingState } from "@/components/atoms/Toast/Toast";
import React from "react";

export const useToastContextValue = () => {
  const [_visible, _setVisible] = React.useState(false);
  const [_loadingState, _setLoadingState] =
    React.useState<ToastLoadingState>("LOADING");
  const [_message, _setMessage] = React.useState("");

  const setToast = (state: ToastLoadingState, message: string) => {
    _setLoadingState(state);
    _setMessage(message);

    if (state === "LOADING") {
      _setVisible(true);
    } else if (state === "SUCCESS" || state === "FAILURE") {
      _setVisible(true);
      setTimeout(() => {
        _setVisible(false);
        setTimeout(() => {
          _setLoadingState("LOADING");
          _setMessage("");
        }, 1000);
      }, 3000);
    }
  };

  return {
    visible: _visible,
    state: _loadingState,
    message: _message,
    setToast,
  };
};

type TToastContext = {
  setToast: (state: ToastLoadingState, message: string) => void;
};

const ToastContext = React.createContext<TToastContext>({
  setToast: () => {},
});

export default ToastContext;
