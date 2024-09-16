import { getAllArticles } from "../../utils/api";
import { useEffect, useState } from "react";
import "./ArticleContainer.css";
import ArticleCard from "./ArticleCard/ArticleCard";

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
          <div className="article-card">
            <ArticleCard key={article.article_id} article={article} />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleContainer;
