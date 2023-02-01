import { useState } from "react";
import "./App.scss";

// banner ( 6 pictures in body)
import Banner from "./Components/banner/Banner";
// Other gyms
import Brand from "./Components/brand/Brand";
// Feedback from customers
import Customer from "./Components/Customer/Customer";
// Contact information
import Footer from "./Components/footer/Footer";
// Header navigation
import Header from "./Components/header/Header";
// Shop now
import ShopNow from "./Components/shopNow/shopNow";
// product list
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