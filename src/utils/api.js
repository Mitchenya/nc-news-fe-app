import axios from "axios";

const NCNews = axios.create({
  baseURL: "https://nc-news-unj1.onrender.com",
});

export function getAllArticles() {
  return NCNews.get("/api/articles").then(({ data }) => {
    return data;
  });
}

export function getArticleById(article_id) {
  return NCNews.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}
