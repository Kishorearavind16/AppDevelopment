import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Product.css";

const ProductList = () => {
  return (
    <>
      <h1 className="product-title center">Products</h1>
      <div className="cocktails-center">
        <p>No products to display.</p>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
