import React from "react";
import { PuffLoader } from "react-spinners";
import SvgElem, { SvgElems } from "../SvgElem/SvgElem";
import S from "./Toast.styled";

export type ToastLoadingState = "LOADING" | "SUCCESS" | "FAILURE";

type ToastProps = {
  visible: boolean;
  state: ToastLoadingState;
  message?: string;
};

const Toast: React.FC<ToastProps> = ({ visible, state, message }) => {
  return (
    <S.Container visible={visible ? 1 : 0}>
      <S.Loading loading={state === "LOADING" ? 1 : 0}>
        {state === "LOADING" && (
          <S.PuffLoader>
            <PuffLoader size={25} color={"#8AD6B8"} />
          </S.PuffLoader>
        )}
        {state === "SUCCESS" && <SvgElem svg={SvgElems.IconStatusCheck} />}
        {state === "FAILURE" && <SvgElem svg={SvgElems.IconStatusCross} />}
        {message && <S.Message>{message}</S.Message>}
      </S.Loading>
    </S.Container>
  );
};

export default Toast;
