import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR
}
from '../types';
import AxiosClient from '../config/AxiosConfig';

/**
 * Get all the posts from API
 * @returns 
 */
export function getPosts() {
    
    return async (dispatch) => {

        dispatch(getPostsStart());

        try {
            await AxiosClient.get(`/posts`)
                .then(posts => {
                    
                    dispatch(getPostsSuccess(posts.data));
                })
        } catch (error) {
            dispatch(getPostsError());
        }
    }
}

export const getPostsStart = () => ({
    type: GET_POSTS
})

export const getPostsSuccess = data => ({
    type: GET_POSTS_SUCCESS,
    payload: data
})

export const getPostsError = () => ({
    type: GET_POSTS_ERROR
})