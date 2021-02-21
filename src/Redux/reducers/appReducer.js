const INITIALIZE = "appReducer/INITIALIZE";

const initialState = {
  isInitialized: false,
  isLoading: false,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, isInitialized: true };
    default:
      return state;
  }
};

// ACTIONs

export const initialize = () => ({ type: INITIALIZE });

//THUNKs
