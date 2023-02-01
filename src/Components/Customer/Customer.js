// Feedback from customers

import "./customer.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="customer">
      <h2>See What They Said About Us</h2>
      <div className="customer-inner">
        <Slider {...settings}>
          <div className="customer-review">
            <img
              src={require("../../img/customer.png")}
              width="82px"
              height="82px"
              alt=""
            />
            <p>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </p>
            <h5>LINA</h5>
            <span>Happy client</span>
          </div>

          <div className="customer-review">
            <img
              src={require("../../img/customer.png")}
              width="82px"
              height="82px"
              alt=""
            />
            <p>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </p>
            <h5>LINA</h5>
            <span>Happy client</span>
          </div>

          <div className="customer-review">
            <img
              src={require("../../img/customer.png")}
              width="82px"
              height="82px"
              alt=""
            />
            <p>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </p>
            <h5>LINA</h5>
            <span>Happy client</span>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Customer;
