import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../item/item";
import RelatedProductsItem from "../RelatedProducts/RelatedProductsItems";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Most Popular Options</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <RelatedProductsItem
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
