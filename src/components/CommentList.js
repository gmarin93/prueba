import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import shortid from 'shortid';

const CommentList = ({id,comments}) => {
        
    return (
        <>
            {
                comments.map(comment=> <Comment key={shortid.generate()} comment={comment}/>)
            }
            <NewComment id={id}/>
        </>
       
    );
};

export default CommentList;