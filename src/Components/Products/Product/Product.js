import React, { useContext, useState } from "react";

import { CartContext } from "../../../CartContext";
import "../Products.css";

function Product({ title, price, image, id }) {
  const [cart, setCart] = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const handleClick = ({ title, price, image, id }) => {
    const productsList = cart
      .map((p) => [
        {
          title,
          price,
          image,
          id,
          amount,
        },
      ])
      .filter((val) => {
        return id !== val.id;
      });
    console.log({ productsList });
    const product = {
      title,
      price,
      image,
      id,
      amount,
    };

    setCart(() => [...cart, product]);
  };

  // const addToCart = () => {};
  // const removeFromCart = () => {};

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <br />
        <span>Add To Cart </span>
        <button
          onClick={() =>
            handleClick(
              { title, price, image, id },
              setAmount(() => amount + 1)
            )
          }
        >
          +
        </button>
        <span> {amount} </span>
        <button
          onClick={() =>
            handleClick(
              { title, price, image, id },
              setAmount(() => amount && amount - 1)
            )
          }
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
