import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NewPost from "./components/NewPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news/:id" element={<NewPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
