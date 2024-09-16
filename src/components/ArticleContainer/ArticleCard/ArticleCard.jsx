import "./ArticleCard.css";

function ArticleCard({ article, index }) {
  return (
    <div className="article-div" key={index}>
      <h1>{article.title}</h1>
      <p>
        <em>Written By: {article.author}</em>
      </p>
    </div>
  );
}

export default ArticleCard;
