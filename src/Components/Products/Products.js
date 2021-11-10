import Product from "./Product/Product";
import "./Products.css";

function Products({ products }) {
  return (
    <section className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </section>
  );
}

export default Products;
