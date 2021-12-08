import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const fetchProducts = async () => {
    const res = await fetch(`/api/products/${id}`);
    const product = await res.json();
    setProduct(product);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <img src={product.image} alt={product.title} style={{ width: "300px" }} />
      <h5>id num :{id}</h5>
    </>
  );
};

export default ProductDetail;
