import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  // const product = async () => {
  //   const res = await fetch(`/api/products/${id}`);
  //   const p = await res.json();

  //   const { title, price, image } = p;

  // };
  return (
    <>
      <h5>id num :{id}</h5>
    </>
  );
};

export default ProductDetail;
