import React from "react";
import { Bar } from "./Navbar";
import Footer from "./Footer";
import backgroundImg from "../assets/images/bg.jpg"; 
import "../assets/css/Home.css";


const homeStyles = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "var(--background-width) var(--background-height)",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "1050vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const Home = () => {
  return (
    <div style={homeStyles}>
      <Bar />
      <Footer />
    </div>
  );
};
