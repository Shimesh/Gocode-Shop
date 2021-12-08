import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Product from "./Components/Products/Product/Product";
import ProductDetail from "./Components/Products/ProductDetail/ProductDetail";

const App = () => {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
