import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import UserPage from "./components/Userpage/Userpage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles/singlearticle" element={<SingleArticle />} />
          <Route path="user" element={<UserPage />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
