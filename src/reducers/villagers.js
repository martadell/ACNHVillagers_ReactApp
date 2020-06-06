import types from "../actions/types";

const initialState = {
  villagers: [],
  loading: false,
  error: null,
};

const villagersReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.LOAD_STARTED: {
        return {
          ...state,
          error: null,
          loading: true,
        };
      }
      case types.LOAD_FAILED: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case types.LOAD_SUCCEEDED: {
        return {
          ...state,
          loading: false,
          villagers: action.payload,
        };
      }
    }
    return state;
  };

export default villagersReducer;