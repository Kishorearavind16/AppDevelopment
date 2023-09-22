import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="product-center">
        <img src="./../images/undraw_chilling_8tii.svg" alt="" />
        <section className="content-prod">
          <h1> Design Your Comfort Zone.</h1>

          <p className="description">
           The company itself is a very successful company. The whole
           let him seek, the manners and needs of pain do not know that pain is chosen,
           blinded by the pleasure of flattery, they are blessed by either
           whatever times For the less our hatred will be,
          </p>

          <Link to="/products">
            <button className="btn">Order Now</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Hero;