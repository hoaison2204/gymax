import { useState } from "react";
import "./App.scss";

import Banner from "./Components/banner/Banner";
import Brand from "./Components/brand/Brand";

import Customer from "./Components/Customer/Customer";
import Footer from "./Components/footer/Footer";

import Header from "./Components/header/Header";
import ShopNow from "./Components/shopNow/shopNow";
import ProductList from "./Components/Product/ProductList/ProductList";
import "./index.scss";

import React from 'react'

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <div className="App">
      <Header handleOpen={handleOpen} />
      <div className="main-content">
        <ShopNow />
        <div className="page-main">
          <div className="container">
            <Banner />
            <ProductList />
            <Customer />
            <div className="line"></div>
            <Brand />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
