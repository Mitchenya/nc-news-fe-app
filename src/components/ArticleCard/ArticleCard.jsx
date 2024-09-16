import "./ArticleCard.css";
import { Link } from "react-router-dom";

function ArticleCard({ article, article_id }) {
  return (
    <div className="article-card" key={article_id}>
      <Link className="article-link" to={`/articles/${article.article_id}`}>
        <h1>{article.title}</h1>
      </Link>
      <p>
        <em>Written By: {article.author}</em>
      </p>
    </div>
  );
}

export default ArticleCard;
