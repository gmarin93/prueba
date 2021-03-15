import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  GET_DATA_STATE,
} from "../types";
import AxiosClient from "../config/AxiosConfig";


/**
 * Get All the comments from API
 * @returns 
 */
export function getComments() {
  return async (dispatch) => {
    dispatch(getCommentsStart());

    try {
      await AxiosClient.get(`/comments`).then((comments) => {
        dispatch(getCommentsSuccess(comments.data));
      });
    } catch (error) {
      dispatch(getCommentsError());
    }
  };
}
/**
 * Add new comments
 * @param {*} commentsData 
 * @returns 
 */
export function AddNewComment(commentsData) {debugger
  return async (dispatch) => {

    dispatch(addComment());

    try {
      dispatch(addCommentSuccess(commentsData));
    } catch (error) {
      dispatch(addCommentError());
    }
  };
}


export const getCommentsStart = () => ({
  type: GET_COMMENTS,
});

export const getCommentsSuccess = data => ({
  type: GET_COMMENTS_SUCCESS,
  payload: data,
});

export const getCommentsError = () => ({
  type: GET_COMMENTS_ERROR,
});

export const addComment = () => ({
  type: ADD_COMMENT,
});
export const addCommentSuccess = data => ({
  type: ADD_COMMENT_SUCCESS,
  payload: data,
});
export const addCommentError = () => ({
  type: ADD_COMMENT_ERROR,
});
export const getCommentsState = () => ({
    type: GET_DATA_STATE
  });
export const getCommentsStateSuccesss = () => ({
    type: GET_DATA_STATE
  });
