import axios from "axios";
import React from "React";

const NCNews = axios.create({
  baseURL: "https://nc-news-unj1.onrender.com/",
});

export function getAllArticles() {
  return NCNews.get("/api/articles");
}
