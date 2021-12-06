import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

import "./Cart.css";

function Cart() {
  const [cart] = useContext(CartContext);

  return (
    <div className="cart">
      <div className="title">
        <h1>Shopping Cart</h1>
      </div>
      <div className="itemList">
        {cart.map((p) => (
          <div className="item" key={p.id}>
            <span>{p.title}</span>

            <span>{p.price}$</span>
            <img src={p.image} className="cartImage" alt={p.title} />
            <div className="btn">
              <button>+</button>
              <span>{p.amount}</span>
              <button>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
