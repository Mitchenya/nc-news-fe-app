import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsById, postComment } from "../../utils/api";
import "./SingleArticle.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticleById(article_id)
      .then((data) => {
        setArticle(data.article);
        return getCommentsById(article_id);
      })
      .then((data) => {
        setComments(data.comments);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      setIsSubmitting(true);
      postComment(article_id, "happyamy2016", newComment)
        .then((postedComment) => {
          setComments((prevComments) => [
            postedComment.comment,
            ...prevComments,
          ]);
          setNewComment("");
        })
        .catch((error) => {
          console.error("Failed to post comment:", error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;

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
              alt="Article illustration"
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
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <textarea
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                placeholder="Write your comment here..."
                rows="4"
                required
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
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
      <button
        onClick={handleUpvote}
        style={{ color: userVote === 1 ? "green" : "black" }}
        disabled={userVote === 1}
      >
        <FaThumbsUp />
      </button>
      <button
        onClick={handleDownvote}
        style={{ color: userVote === -1 ? "red" : "black" }}
        disabled={userVote === -1}
      >
        <FaThumbsDown />
      </button>
    </li>
  );
}

export default SingleArticle;
