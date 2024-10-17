import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../item/item";
import RelatedProductsItem from "../RelatedProducts/RelatedProductsItems";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEw COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollections;
