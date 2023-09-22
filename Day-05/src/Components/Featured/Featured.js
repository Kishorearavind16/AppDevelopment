import React from "react";
//import "../pages/Products/Product.css";

const Featured = () => {
  // Replace the data filter with your actual featured product logic
  const featuredProducts = [
    {
      id: 1,
      image: "image_url_1",
      name: "Featured Product 1",
      price: 99.99,
    },
    {
      id: 2,
      image: "image_url_2",
      name: "Featured Product 2",
      price: 129.99,
    },
    // Add more featured products as needed
  ];

  return (
    <>
      <h1 className="product-title center">Featured</h1>
      <div className="cocktails-center">
        {featuredProducts.map((product) => {
          const { id, image, name, price } = product;
          return (
            <article key={id} className="cocktail">
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
              <div className="cocktail-footer">
                <div className="product">
                  <h4>{name}</h4>
                  <h4 className="price">${price}</h4>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Featured;
