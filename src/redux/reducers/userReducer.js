import {
  FETCH_LOADING,
  FETCH_ME_PROFILE_SUCCESS,
  FETCH_ERROR,
  FETCH_ALL_PROFILES_SUCCESS,
} from "../actions/userAction.js";

// Stato iniziale
const initialState = {
  meProfile: [],
  allProfile: [],
  loading: false,
  error: null,
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ALL_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        allProfile: action.payload,
        error: null,
      };

    case FETCH_ME_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        meProfile: action.payload,
        error: null,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
