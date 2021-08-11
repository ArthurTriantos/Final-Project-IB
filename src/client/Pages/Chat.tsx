import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar";
import Comment from "../components/Comment";

const Chat: React.FC<IChat> = () => {
  const history = useHistory();
  const [comments, setComments] = useState<CommentState[]>([]);
  const [user, setUser] = useState("");
  const [commentText, setCommentText] = useState("");

  const getComments = async () => {
    let r = await fetch("/api/comments");
    let comments = await r.json();
    setComments(comments);
  };

  function submit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let newComment: { username: string; commentText: string } = {
      username: user,
      commentText: commentText,
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/comments", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(newComment));

    history.goBack();
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <main className="main-chat-container">
        <Navbar></Navbar>

        <div className="row mt-5">
          <div className="col-md-4 mt-4">
            <div id="form-container">
              <form className="border shadow-lg"id="chirp-form" action="">
                <h3 id="form-title">New Comment</h3>
                <input
                  id="username-input"
                  value={user}
                  placeholder="Username"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
                <textarea
                  id="chirp-textarea"
                  value={commentText}
                  placeholder="What's on your mind?"
                  rows={5}
                  onChange={(e) => {
                    setCommentText(e.target.value);
                  }}
                ></textarea>
                <button id="chirp-button" onClick={submit}>
                  Comment
                </button>
              </form>
            </div>
          </div>

          <div id="timeline" className="col-md-8 mt-5">
            {comments.map((comment) => (
              <Comment comment={comment} key={`comment-${comment.id}`} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

interface IChat {}

export interface CommentState {
  id: string;
  image: string;
  username: string;
  chirpText: string;
}

export default Chat;
