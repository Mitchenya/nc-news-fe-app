import axios from "axios";

const NCNews = axios.create({
  baseURL: "https://nc-news-unj1.onrender.com/api",
});

export function getAllArticles() {
  return NCNews.get("/articles").then(({ data }) => {
    return data;
  });
}

export function getArticleById(article_id) {
  return NCNews.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function getCommentsById(article_id) {
  return NCNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}

export function updateArticleVotes(article_id, voteChange) {
  return NCNews.patch(`/articles/${article_id}`, {
    inc_votes: voteChange,
  });
}

export function postComment(article_id, username, body) {
  return NCNews.post(`/articles/${article_id}/comments`, {
    username,
    body,
  }).then((response) => {
    return response.data;
  });
}

export function deleteComment(comment_id) {
  return NCNews.delete(`/comments/${comment_id}`).then((response) => {
    return response.data.msg;
  });
}

export function checkOnlineStatus() {
  if (!navigator.onLine) {
    console.log("User is offline.");
    return;
  }
  console.log("User is online");
  return true;
}
