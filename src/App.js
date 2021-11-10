import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
import Header from "./Components/Header/Header";
import MagicButton from "./Components/MagicButton/MagicButton";
import Products from "./Components/Products/Products";
import { CartProvider } from "./CartContext";
import Cart from "./Components/Cart/Cart";

function App() {
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const list = await res.json();
    setProducts(list);
    setFiltered(list);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => fetchProducts(), []);
  const [filtered, setFiltered] = useState(products);

  const categories = [
    "-ALL-",
    ...products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];
  const filterCategory = (cat) => {
    cat === "-ALL-"
      ? setFiltered(products)
      : setFiltered(products.filter((newList) => newList.category === cat));
  };

  return (
    <>
      <CartProvider>
        <Header categories={categories} filterFunc={filterCategory} />
        <MagicButton />
        <Cart />
        <Products products={filtered} />
      </CartProvider>
    </>
  );
}

export default App;
