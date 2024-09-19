import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import SingleArticle from "./components/SingleArticle/SingleArticle.jsx";
import UserPage from "./components/Userpage/Userpage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ArticleContainer from "./components/ArticleContainer/ArticleContainer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cooking" element={<ArticleContainer />} />
        <Route path="/coding" element={<ArticleContainer />} />
        <Route path="/football" element={<ArticleContainer />} />
        <Route path="user" element={<UserPage />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
