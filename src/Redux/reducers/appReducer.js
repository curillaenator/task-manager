const INITIALIZE = "appReducer/INITIALIZE";

const initialState = {
  isInitialized: false,
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

const initialize = () => ({ type: INITIALIZE });

//THUNKs
