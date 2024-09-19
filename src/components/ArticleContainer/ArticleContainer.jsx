import { getAllArticles } from "../../utils/api";
import { useEffect, useState } from "react";
import "./ArticleContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleContainer() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data.articles);
      setFilteredArticles(data.articles);
    });
  }, []);

  const handleButtons = (e) => {
    const topic = e.target.value;

    if (topic === "All") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) => article.topic === topic);
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="article-container">
      <div className="buttons">
        <button value="All" onClick={handleButtons}>
          All
        </button>
        <button value="cooking" onClick={handleButtons}>
          Cooking
        </button>
        <button value="coding" onClick={handleButtons}>
          Coding
        </button>
        <button value="football" onClick={handleButtons}>
          Football
        </button>
      </div>
      {filteredArticles.map((article) => {
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
