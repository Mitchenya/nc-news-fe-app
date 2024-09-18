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

export function getCommentsById(article_id) {
  return NCNews.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}

export function updateArticleVotes(article_id, voteChange) {
  return NCNews.patch(`api/articles/${article_id}`, {
    inc_votes: voteChange,
  });
}

export function postComment(article_id, username, body) {
  return NCNews.post(`api/articles/${article_id}/comments`, {
    username,
    body,
  }).then((response) => {
    return response.data;
  });
}

export function deleteComment(comment_id) {
  return NCNews.delete(`api/comments/${comment_id}`).then((response) => {
    return response.data.msg;
  });
}
