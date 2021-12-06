import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../CartContext";
import "../Products.css";

const Product = ({ title, price, image, id }) => {
  const [cart, setCart] = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const handleClick = ({ title, price, image, id }) => {
    const product = {
      title,
      price,
      image,
      id,
      amount,
    };

    setCart(() => [...cart, product]);
  };

  return (
    <div className="product-card">
      <Link to={`/ProductDetail/${id}`}>
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <br />
        <span>Add To Cart </span>
        <button
          onClick={() =>
            handleClick(
              { title, price, image, id, amount },
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
              { title, price, image, id, amount },
              setAmount(() => amount && amount - 1)
            )
          }
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
