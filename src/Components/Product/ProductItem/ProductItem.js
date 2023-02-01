import "./productItem.scss";
import React from "react";

function ProductItem({ img, name, price }) {
  return (
    <div className="product-item">
      <div className="product-inner">
        <div className="btn-icon">
          <i className="fas fa-shopping-basket"></i>
          <i className="fas fa-eye"></i>
          <i className="fas fa-heart"></i>
          <i className="fas fa-exchange-alt"></i>
        </div>
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="product-content">
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
