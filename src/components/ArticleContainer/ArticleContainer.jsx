import { getAllArticles } from "../../utils/api";
import { useEffect, useState } from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleContainer() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <div className="article-container">
      {articles.map((article) => {
        return (
          <div key={article.article_id} className="article-card">
            <ArticleCard article={article} article_id={article.article_id} />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleContainer;
