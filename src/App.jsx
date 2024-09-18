import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import SingleArticle from "./components/SingleArticle/SingleArticle.jsx";
import UserPage from "./components/Userpage/Userpage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/singlearticle" element={<SingleArticle />} />
        <Route path="user" element={<UserPage />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
