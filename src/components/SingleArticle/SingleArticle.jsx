import { getArticleById } from "../../utils/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";
function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
  }, [article_id]);

  return (
    <div>
      {article && (
        <>
          <h1>{article.title}</h1>
          <h2>
            <em>{article.author}</em>
          </h2>
          <img
            className="article-img"
            src={article.article_img_url}
            alt="Lots of food being displayed upon a wooden table"
          />
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
}

export default SingleArticle;
