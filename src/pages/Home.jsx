import React from "react";
import Announcement from "../components/Announcement";
import Components from "../components/Components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Components />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
