import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import UserPage from "./components/Userpage/Userpage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles/singlearticle" element={<SingleArticle />} />
          <Route path="user" element={<UserPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
