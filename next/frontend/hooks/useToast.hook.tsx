import ToastContext from "@/contexts/Toast.context";
import React from "react";

const useToast = () => {
  const { setToast } = React.useContext(ToastContext);
  return { setToast };
};

export default useToast;
