import React from "react";
import AdFormat from "../adFormat/AdFormat";
import Compress from "../Compress/Compress";
import Content from "../Content/Content";
import Expression from "../Expression/Expression";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Content />
      <Compress />
      <AdFormat />
      <Expression />
      <Footer />
    </div>
  );
};

export default Home;
