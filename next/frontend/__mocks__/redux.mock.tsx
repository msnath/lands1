import { useReduxStore } from "@/hooks/useRedux.hook";
import { InitialReduxState } from "@/redux/store/store";
import React from "react";
import { Provider } from "react-redux";

const ReduxMock: React.FC = ({ children }) => {
  return (
    <Provider store={useReduxStore(InitialReduxState)}>{children}</Provider>
  );
};

export default ReduxMock;
