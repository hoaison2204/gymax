// other gym room brand

import "./brand.scss";
import React from 'react'

const Brand = () => {
  return (
    <div className="brand row">
      <div className="brand-inner">
        <div className="brand-content">
          <img src={require("../../img/Brand-1.png")} alt="" />
        </div>
      </div>
      <div className="brand-inner">
        <div className="brand-content">
          <img src={require("../../img/Brand-2.png")} alt="" />
        </div>
      </div>
      <div className="brand-inner">
        <div className="brand-content">
          <img src={require("../../img/Brand-3.png")} alt="" />
        </div>
      </div>
      <div className="brand-inner">
        <div className="brand-content">
          <img src={require("../../img/Brand-4.png")} alt="" />
        </div>
      </div>
      <div className="brand-inner">
        <div className="brand-content">
          <img src={require("../../img/Brand-5.png")} alt="" />
        </div>
      </div>
      <div className="brand-inner">
        <div className="brand-content">
          <img src={require("../../img/Brand-6.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Brand;
