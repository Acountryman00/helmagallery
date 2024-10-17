import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/item/item";
import all_product from "../Components/Assets/all_product";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <h1>Shop all Paintings</h1>
        </p>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                image2={item.image2}
                price={item.price}
                old_price={item.old_price}
                sold={item.sold}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;

/*  <div className="shopcategory-sort">
           Sort by <img src={dropdown_icon} />
              <div className="shopcategory-loadmore">Explore More</div>
        </div> */
