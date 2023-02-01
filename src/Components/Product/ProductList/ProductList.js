import "./productList.scss";
import React, { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

function ProductList() {
  const [index, setIndex] = useState(0);
  return (
    <div className="tab-bar">
      <ul className="tab-bar-list">
        <li>
          <p
            href=""
            class={`${index === 0 ? "active" : null}`}
            onClick={() => setIndex(0)}
          >
            top sellers
          </p>
        </li>
        <li>
          <p
            class={`${index === 1 ? "active" : null}`}
            onClick={() => setIndex(1)}
            href=""
          >
            featured
          </p>
        </li>
        <li>
          <p
            class={`${index === 2 ? "active" : null}`}
            onClick={() => setIndex(2)}
            href=""
          >
            most reviews
          </p>
        </li>
      </ul>
      <div className="tab-wrap">
        <div className="top-seller-product" hidden={index !== 0}>
          <div className="product-list row">
            <ProductItem
              img={require("../../../img/pd-1.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-2.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-3.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-4.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-5.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-6.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-7.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-4.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
          </div>
        </div>

        <div className="featured" hidden={index !== 1}>
          <div className="product-list row">
            <ProductItem
              img={require("../../../img/pd-3.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-1.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-2.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />

            <ProductItem
              img={require("../../../img/pd-6.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-7.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-4.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-4.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-5.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
          </div>
        </div>

        <div className="featured" hidden={index !== 2}>
          <div className="product-list row">
            <ProductItem
              img={require("../../../img/pd-4.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-4.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-5.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-3.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-1.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-2.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />

            <ProductItem
              img={require("../../../img/pd-6.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
            <ProductItem
              img={require("../../../img/pd-7.png")}
              name={"Body Champ Cardio"}
              price={"$342.00"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
