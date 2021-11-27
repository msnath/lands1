import { TTab, TTabAction } from "@/redux/reducers/tab.reducer";

export enum TabActionType {
  TAB = "TAB",
}

const TabAction = {
  setTab: (tab: TTab): TTabAction => ({
    type: TabActionType.TAB,
    payload: { tab },
  }),
};

export default TabAction;
