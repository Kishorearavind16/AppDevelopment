import React from "react";
import { Link } from "react-router-dom";
import "../../Components/Services/Services.css";

const About = () => {
  return (
    <div className="about-wrapper flex-columns">
      <div className="product-center">
        <img src="./../images/undraw_team_work_k80m.svg" alt="about us" />
        <section className="content-prod">
          <h1> About Us</h1>
          
          <p className="description">
          The company itself is a very successful company. The whole
            let him seek, the manners and needs of pain do not know that pain is chosen,
            blinded by the pleasure of flattery, they are blessed by either
            whatever times For the less our hatred will be,
          </p>
          <Link to="/products">
            <button className="btn">Browse Products</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
