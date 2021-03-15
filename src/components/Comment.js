import React from 'react';

const Comment = ({comment}) => {

    return (
        <div>
            <p className="font-weight-bold">{comment.name}</p>
            <p className="font-bold small">{comment.email}</p>
            <p className="font-italic small">{comment.body}</p>
        </div>
    );
};

export default Comment;