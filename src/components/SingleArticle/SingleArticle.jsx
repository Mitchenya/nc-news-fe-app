import { getArticleById, getCommentsById } from "../../utils/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";

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
                <li key={comment.comment_id}>
                  <p>{comment.body}</p>
                  <p>
                    <em>{comment.author}</em>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleArticle;
