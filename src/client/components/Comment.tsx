import React from 'react';


const Comment = ({ comment }) => {
    return (
        <>
            <div className="chirp">
                <h3>By: {comment.username}</h3>
                <br />
                <h6>{comment.commentText}</h6>
            </div>
        </>
    );
};

export default Comment;