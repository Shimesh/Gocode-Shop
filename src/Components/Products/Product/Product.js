import React, { useContext, useState } from "react";

import { CartContext } from "../../../CartContext";
import "../Products.css";

function Product({ title, price, image, _id: id }) {
  const [cart, setCart] = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const handleClick = ({ title, price, image, id }) => {
    //check if the item exist
    //if exist update the item amount if not add to cart

    const product = {
      title,
      price,
      image,
      id,
      amount,
    };

    setCart(() => [...cart, product]);
    console.log(product);
    console.log(cart);
    // cart.map((item) => {
    //   return item.id === product.id
    //     ? ((item.amount = setAmount(() => amount + 1)),
    //       setCart(() => [...cart, product]))
    //     : setCart(() => [...cart, product]);
    // });
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
}

export default Product;
