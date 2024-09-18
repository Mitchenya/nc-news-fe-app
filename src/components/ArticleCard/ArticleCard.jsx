import "./ArticleCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateArticleVotes } from "../../utils/api";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function ArticleCard({ article, article_id }) {
  const [votes, setVotes] = useState(article.votes);
  const [userVote, setUserVote] = useState(0);

  function handleVote(voteType) {
    let voteChange;

    if (voteType === "upvote") {
      if (userVote === 1) {
        voteChange = -1;
        setUserVote(0);
      } else {
        voteChange = userVote === -1 ? 2 : 1;
        setUserVote(1);
      }
    } else {
      if (userVote === -1) {
        voteChange = 1;
        setUserVote(0);
      } else {
        voteChange = userVote === 1 ? -2 : -1;
        setUserVote(-1);
      }
    }

    setVotes(votes + voteChange);

    updateArticleVotes(article.article_id, voteChange)
      .then(() => {})
      .catch((error) => {
        console.error("Error updating votes:", error);
        setVotes(votes - voteChange);
        setUserVote(userVote);
      });
  }

  return (
    <div className="article-card" key={article_id}>
      <Link className="article-link" to={`/articles/${article.article_id}`}>
        <h1>{article.title}</h1>
        <p>Votes: {votes}</p>
      </Link>
      <p>
        <em>Written By: {article.author}</em>
      </p>
      <button
        onClick={() => handleVote("upvote")}
        style={{ color: userVote === 1 ? "green" : "black" }}
      >
        <FaThumbsUp />
      </button>
      <button
        onClick={() => handleVote("downvote")}
        style={{ color: userVote === -1 ? "red" : "black" }}
      >
        <FaThumbsDown />
      </button>
    </div>
  );
}

export default ArticleCard;
