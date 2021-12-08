import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Home.css";
import Header from "../Header/Header";
import MagicButton from "../MagicButton/MagicButton";
import Products from "../Products/Products";
import { CartProvider } from "../../CartContext";
// import Cart from "../Cart/Cart";
import { ProductsContext } from "../../ProductsContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(products);
  const [sliderValues, setSliderValues] = useState([]);

  const sortByPrice = (products) => {
    const price = [...products.map((p) => p.price)].sort((a, b) => a - b);
    const min = price[0];
    const max = price[price.length - 1];
    const minMax = [min, max];
    setSliderValues(() => [...minMax]);
  };

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const list = await res.json();

    setProducts(list);
    setFiltered(list);
    sortByPrice(list);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
    <ProductsContext.Provider value={[products, setProducts]}>
      <CartProvider>
        <Header
          categories={categories}
          filterFunc={filterCategory}
          sliderValues={sliderValues}
        />
        <MagicButton />
        {/* <Cart /> */}
        <Products products={filtered} />
      </CartProvider>
    </ProductsContext.Provider>
  );
}

export default Home;
