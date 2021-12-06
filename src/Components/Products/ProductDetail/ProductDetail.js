import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <h1>ProductDetail </h1>
      {id}
    </>
  );
};

export default ProductDetail;
