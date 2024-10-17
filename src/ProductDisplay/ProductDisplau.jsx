import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 className="product-title">{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">{product.price}</div>
        </div>

        <p className="productdisplay-right-category">
          <span>Category :</span>
          {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Dimensions :</span> {product.dimensions}
        </p>
        <span className="product-sold">{product.sold}</span>
      </div>
    </div>
  );
};

export default ProductDisplay;
/*
<button
onClick={() => {
  addToCart(product.id);
}}
>
ADD TO CART
</button> */
