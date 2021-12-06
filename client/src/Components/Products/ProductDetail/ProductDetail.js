import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <>
      <h5>id num :{id}</h5>
    </>
  );
};

export default ProductDetail;
