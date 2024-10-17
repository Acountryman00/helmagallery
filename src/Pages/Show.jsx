import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import ShowInfo from "./Shows/ShowInfo/ShowInfo";
import { ShopContext } from "../Context/ShopContext";
import Product from "./Product";

const Show = () => {
  const { all_Product } = useContext(ShowContext);
  const { productId } = useParams();
  const show = all_Product.find((e) => e.id === Number(productId));
  return (
    <div>
      <ShowInfo product={show} />
    </div>
  );
};

export default Show;
