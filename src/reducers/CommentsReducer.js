import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  GET_DATA_STATE,
  GET_DATA_STATE_SUCCESS,
} from "../types";

const initialState = {
  comments: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: [],
        error: false,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: false,
        loading: false,
      };

    case GET_COMMENTS_ERROR:
      return {
        ...state,
        comments: [],
        error: true,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [],
        error: false,
        loading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: false,
        loading: false,
      };
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        comments: [],
        error: true,
        loading: false,
      };

    case GET_DATA_STATE:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
