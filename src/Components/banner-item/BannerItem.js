// 6 pictures in body website

import React from "react";
import "./bannerItem.scss";

const BannerItem = ({ image, icon, title, description, id }) => {
  // const { image, icon, title, description, id } = props;
  return (
    <div className="banner-item" id={id}>
      <img src={image} alt="" />
      <div className="banner-content">
        <img src={icon} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BannerItem;