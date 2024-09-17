import { getArticleById, getCommentsById } from "../../utils/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data.article);
    });

    getCommentsById(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [article_id]);

  return (
    <div className="article-list">
      {article && (
        <>
          <h1>{article.title}</h1>
          <h2>
            <em>{article.author}</em>
          </h2>
          {article.article_img_url && (
            <img
              className="article-img"
              src={article.article_img_url}
              alt="Lots of food being displayed upon a wooden table"
            />
          )}
          <p>{article.body}</p>

          <div className="comment-list">
            <p>Comments: {comments.length}</p>
            <ul>
              {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

function Comment({ comment }) {
  const [votes, setVotes] = useState(comment.votes);
  const [userVote, setUserVote] = useState(0);

  const handleUpvote = () => {
    if (userVote === 1) {
      setVotes(votes - 1);
      setUserVote(0);
    } else if (userVote === -1) {
      setVotes(votes + 2);
      setUserVote(1);
    } else {
      setVotes(votes + 1);
      setUserVote(1);
    }
  };

  const handleDownvote = () => {
    if (userVote === -1) {
      setVotes(votes + 1);
      setUserVote(0);
    } else if (userVote === 1) {
      setVotes(votes - 2);
      setUserVote(-1);
    } else {
      setVotes(votes - 1);
      setUserVote(-1);
    }
  };

  return (
    <li>
      <p>{comment.body}</p>
      <p>
        <em>{comment.author}</em>
      </p>
      <p>Votes: {votes}</p>
      <button onClick={handleUpvote} disabled={userVote === 2}>
        <FaThumbsUp />
      </button>
      <button onClick={handleDownvote} disabled={userVote === -2}>
        <FaThumbsDown />
      </button>
    </li>
  );
}

export default SingleArticle;
