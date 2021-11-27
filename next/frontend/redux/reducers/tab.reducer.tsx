import { TabActionType } from "@/redux/actions/tab.action";

export type TTab = "UNIVERSITIES" | "COURSES";

export type TTabState = { tab: TTab };

export type TTabAction = {
  type: string;
  payload: {
    tab?: TTab;
  };
};

const initState: TTabState = { tab: "UNIVERSITIES" };

const TabReducer = (
  state: TTabState = initState,
  action: TTabAction
): TTabState => {
  if (!action.payload) return state;

  const { tab } = action.payload;

  switch (action.type) {
    case TabActionType.TAB:
      if (tab !== undefined) return { ...state, tab };
      break;
  }

  return state;
};

export default TabReducer;
