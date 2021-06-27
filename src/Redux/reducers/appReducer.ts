import { AnyAction, Reducer } from "redux";

import { TAction } from "../../types/types";

const INITIALIZE = "appReducer/INITIALIZE";

const initialState = {
  isInitialized: false,
  isLoading: false,
};

type TInitialState = typeof initialState;

export const app: Reducer<TInitialState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isInitialized: true };

    default:
      return state;
  }
};

// ACTIONs

export const initialize: TAction<void> = () => ({ type: INITIALIZE });

//THUNKs
