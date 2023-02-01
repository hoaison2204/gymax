// 6 pictures in body website

import React from "react";
import BannerItem from "../banner-item/BannerItem";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-inner row">
        <BannerItem
          image={require("../../img/banner-item1.png")}
          id={"banner-id-1"}
        />
        <BannerItem
          id={"banner-id-2"}
          icon={require("../../img/icon-1.png")}
          title={"strength"}
          description={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <BannerItem
          image={require("../../img/banner-item2.png")}
          id={"banner-id-3"}
        />
        <BannerItem
          id={"banner-id-4"}
          icon={require("../../img/icon-2.png")}
          title={"dumbbells"}
          description={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <BannerItem
          image={require("../../img/banner-item3.png")}
          id={"banner-id-5"}
        />
        <BannerItem
          id={"banner-id-6"}
          icon={require("../../img/icon-3.png")}
          title={"power rack & cages "}
          description={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
      </div>
    </div>
  );
}

export default Banner;