import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from "../actions/commentsAction";

// Stato iniziale
const initialState = {
  comments: [],
  loading: false,
  error: null,
};

// Reducer
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
    case CREATE_COMMENT_REQUEST:
    case UPDATE_COMMENT_REQUEST:
    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.payload],
      };

    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.map((comment) =>
          comment._id === action.payload._id ? action.payload : comment
        ),
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload
        ),
      };

    case FETCH_COMMENTS_FAILURE:
    case CREATE_COMMENT_FAILURE:
    case UPDATE_COMMENT_FAILURE:
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default commentsReducer;
