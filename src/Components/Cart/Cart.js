import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const [items, setItems] = useState(cartItems);
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  const styles = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "10em",
    hight: "5em",
    backgroundColor: "white",
    border: ".5px dashed black",
  };

  return (
    <div
      style={{
        width: "70em",
        hight: "20em",
        backgroundColor: "cyan",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>This Is The Cart</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {items.map((item) => (
          <div key={item} style={styles}>
            <span>{item.title}</span>
            <img
              src={item.image}
              style={{ width: "50px", hight: "50px" }}
              alt={item.title}
            />
            <span>{item.price}$</span>
            <span>{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
