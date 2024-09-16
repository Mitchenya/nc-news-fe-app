import axios from "axios";

const NCNews = axios.create({
  baseURL: "https://nc-news-unj1.onrender.com",
});

export function getAllArticles() {
  return NCNews.get("/api/articles").then(({ data }) => {
    console.log(data);
    return data;
  });
}
