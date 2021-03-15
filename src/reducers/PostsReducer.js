import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR
}
    from '../types';

const initialState = {
    posts: [],
    error: false,
    loading: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: [],
                error: false,
                loading: true
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                error: false,
                loading: false
            }

        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: [],
                error: true,
                loading: false,
            }

        default:
            return state

    }
}
