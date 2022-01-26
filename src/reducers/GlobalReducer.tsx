import {Reducer} from "react";

export const START_GLOBAL_LOADING = 'START_GLOBAL_LOADING';
export const STOP_GLOBAL_LOADING = 'STOP_GLOBAL_LOADING';

export interface StartGlobalLoadingAction {
  type: typeof START_GLOBAL_LOADING;
}

export interface StopGlobalLoadingAction {
  type: typeof STOP_GLOBAL_LOADING;
}

export const reducer: Reducer<GlobalAppState, globalActions> = (state = defaultState, action) => {
  switch (action.type) {
    case START_GLOBAL_LOADING:
      return {
        ...state,
        isGlobalLoadingInProgress: true
      }
    case STOP_GLOBAL_LOADING:
      return {
        ...state,
        isGlobalLoadingInProgress: false
      }
    default:
      return state
  }
}

export interface GlobalAppState {
  isGlobalLoadingInProgress: boolean;
}

export const defaultState: GlobalAppState = {
  isGlobalLoadingInProgress: false,
};

export type globalActions =
    | StartGlobalLoadingAction
    | StopGlobalLoadingAction;