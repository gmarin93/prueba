import {combineReducers} from 'redux';
import CommentsReducer from './CommentsReducer';
import PostsReducer from "./PostsReducer";


export default combineReducers({
    commentsState:CommentsReducer,
    postsState:PostsReducer
})