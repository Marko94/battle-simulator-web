import {globalActions, GlobalAppState, reducer} from "./reducers/GlobalReducer";
import React, {createContext, Dispatch, useReducer} from "react";

export const defaultState: GlobalAppState = {
  isGlobalLoadingInProgress: false,
};
export const GlobalContext = createContext<[GlobalAppState, Dispatch<globalActions>]>([defaultState, () => {}]);

const GlobalStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
};

export default GlobalStore;