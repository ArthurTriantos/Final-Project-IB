import React from 'react';


const Comment = ({ comment }: { comment: any}) => {
    return (
        <>
            <div className="chirp">
                <h6>{comment.commentText}</h6>
                <br />
                <h3>~ {comment.username}</h3>
            </div>
        </>
    );
};

export default Comment;