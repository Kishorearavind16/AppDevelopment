import React from "react";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Blog/Blog";
import Featured from "../../Components/Featured/Featured";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Services />
      <Form />
      <Footer />
    </>
  );
}
