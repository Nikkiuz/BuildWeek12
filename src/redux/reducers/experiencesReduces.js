import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_FAILURE,
  CREATE_EXPERIENCE_REQUEST,
  CREATE_EXPERIENCE_SUCCESS,
  CREATE_EXPERIENCE_FAILURE,
  UPDATE_EXPERIENCE_REQUEST,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_FAILURE,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_FAILURE,
} from "../actions/experiencesAction";

const initialState = {
  experiences: [],
  loading: false,
  error: null,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_REQUEST:
    case CREATE_EXPERIENCE_REQUEST:
    case UPDATE_EXPERIENCE_REQUEST:
    case DELETE_EXPERIENCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Resetta l'errore all'inizio della richiesta
      };

    case FETCH_EXPERIENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        experiences: action.payload,
        error: null, // Assicura che l'errore sia resettato
      };

    case CREATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        experiences: [...state.experiences, action.payload],
        error: null,
      };

    case UPDATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        experiences: state.experiences.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
        error: null,
      };

    case DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        experiences: state.experiences.filter(
          (exp) => exp._id !== action.payload
        ),
        error: null,
      };

    case FETCH_EXPERIENCES_FAILURE:
    case CREATE_EXPERIENCE_FAILURE:
    case UPDATE_EXPERIENCE_FAILURE:
    case DELETE_EXPERIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default experiencesReducer;
