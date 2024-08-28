import React from "react";   //routing: helps to  switch over differnt pages without loading the webpage
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <br />
        <Link to="/about">About</Link>
        <br />
        <br />
        <Link to="/news">News</Link>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<h2>This is Home Data</h2>} />
          <Route path="/about" element={<h2>This is About Data</h2>} />
          <Route path="/news" element={<h2>This is News Data</h2>} />

          <Route path="*" element={<h2>404 page was not found</h2>} />
        </Routes>
        <div>
          <h4>Thus is footer</h4>
        </div>
      </BrowserRouter>
    </div>
  );
}
