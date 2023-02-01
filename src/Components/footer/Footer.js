// contact information

import "./footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-inner">
            <img src={require("../../img/Logo.png")} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <div className="contact">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="footer-center row">
          <div className="footer-center-inner">
            <div className="footer-content">
              <h4>contact us</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> 200 Lincoln Ave,
                Salinas, CA 93901
              </p>
              <p>
                <i className="fas fa-phone"></i> 023 32423 223
              </p>
              <p>
                <i className="fas fa-envelope"></i> gymax@example.com
              </p>
              <p>
                <i className="fas fa-clock"></i> 9:00 - 20:00 All day
              </p>
            </div>
          </div>

          <div className="footer-center-inner">
            <div className="footer-content">
              <h4>My account</h4>
              <p>My account</p>
              <p>Check out</p>
              <p>Register</p>
              <p>Login</p>
            </div>
          </div>

          <div className="footer-center-inner">
            <div className="footer-content">
              <h4>information</h4>
              <p>About us</p>
              <p>Contact us</p>
              <p>Terms of user</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="footer-center-inner">
            <div className="footer-content">
              <h4>Quick link</h4>
              <p>New user</p>
              <p>Help center</p>
              <p>Report spam</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2019 Gymax - Design by ArrowHitech - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
