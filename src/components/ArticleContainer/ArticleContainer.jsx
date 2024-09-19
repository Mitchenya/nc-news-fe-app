import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllArticles } from "../../utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import SortBy from "../SortByButton/SortBy";
import Topics from "../Topics";
import "./ArticleContainer.css";

function ArticleContainer() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data.articles);
      setFilteredArticles(data.articles);
    });
  }, []);

  function handleFilter(topic) {
    let filtered = [];

    if (topic === "All") {
      filtered = articles;
      navigate("/");
    } else {
      filtered = articles.filter((article) => article.topic === topic);
      navigate(`/${topic}`);
    }

    if (sortMethod) {
      filtered = filtered.sort(sortMethod);
    }

    setFilteredArticles(filtered);
  }

  function handleSort(sortValue) {
    const sortMethods = {
      sortByAsc: (a, b) => a.title.localeCompare(b.title),
      sortByDesc: (a, b) => b.title.localeCompare(a.title),
      sortByVotesHighest: (a, b) => b.votes - a.votes,
      sortByVotesLowest: (a, b) => a.votes - b.votes,
      sortByNewest: (a, b) => new Date(b.created_at) - new Date(a.created_at),
      sortByOldest: (a, b) => new Date(a.created_at) - new Date(b.created_at),
      sortByCommentsHighest: (a, b) => b.comment_count - a.comment_count,
      sortByCommentsLowest: (a, b) => a.comment_count - b.comment_count,
    };

    const selectedSortMethod = sortMethods[sortValue];
    setSortMethod(() => selectedSortMethod);

    const sortedArticles = [...filteredArticles].sort(selectedSortMethod);
    setFilteredArticles(sortedArticles);
  }

  return (
    <div className="article-container">
      <div className="filters">
        <Topics handleFilter={handleFilter} />
        <SortBy handleSort={handleSort} />
      </div>

      {filteredArticles.map((article) => (
        <div key={article.article_id} className="article-card">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
}

export default ArticleContainer;
