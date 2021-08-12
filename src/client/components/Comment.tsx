import React from 'react';


const Comment = ({ comment }) => {
    return (
        <>
            <div className="chirp border shadow-lg">
            <h3 className="comment-box-name">{comment.username}</h3>
                <br />
                <h6>{comment.commentText}</h6>
            </div>
        </>
    );
};

export default Comment;