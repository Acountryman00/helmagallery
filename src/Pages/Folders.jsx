import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import "./CSS/Folders.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/item";
import all_product from "../Components/Assets/all_product";
import Lilac_img from "../Components/Assets/Omi-gallery-photos/Lilac.JPEG";
import data_product from "../Components/Assets/data";
import ShowItem from "./Shows/ShowItem";

const Folders = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <h1>Shop all Paintings</h1>
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <ShowItem
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                price={item.price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default Folders;
