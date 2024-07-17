import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Reader from "./reader/Reader";
import Writer from "./writer/Writer";
import Viewer from "./viewer/Viewer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Reader />} />
        <Route path="/createArticle" element={<Writer />} />
        <Route path="/view" element={<Viewer/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
