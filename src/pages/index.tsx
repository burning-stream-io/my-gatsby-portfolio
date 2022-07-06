import React from "react";
import Banners from "../components/Banners";
import Header from "../components/Header";
import "../styles/index.css";

function index() {
  return (
    <div className="home">
      <Header />
      <Banners />
    </div>
  );
}

export default index;
