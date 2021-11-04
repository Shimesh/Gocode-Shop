import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../../CartContext";
import "../Products.css";

function Product({ title, price, image, id }) {
  const [amount, setAmount] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [toCart, setToCart] = useState([]);

  const handleAmount = ({ title, price, image, id }, sign) => {
    sign === "+" ? setAmount(() => amount + 1) : setAmount(() => amount - 1);
    const productToCart = { title, price, image, amount, id };
    // productToCart.id === id ? setToCart(productToCart) : 1;
    console.log(productToCart);
    setCartItems([...cartItems, productToCart]);
    // console.log(productToCart);
    // console.log(cartItems);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <span>Add To Cart </span>
        <button onClick={() => handleAmount({ title, price, image, id }, "+")}>
          +
        </button>
        <button onClick={() => handleAmount({ title, price, image }, "-")}>
          -
        </button>
        <span> {amount}</span>
      </div>
    </div>
  );
}

export default Product;
