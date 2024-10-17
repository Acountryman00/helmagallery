import RelatedProducts from "./RelatedProducts";
import "./RelatedProductsItem.css";
import { Link } from "react-router-dom";

const RelatedProductsItem = (props) => {
  return (
    <div className="relateditem">
      <div className="relatedimg-container">
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
        </Link>
        <div className="relateditem-info">
          <p>{props.name}</p>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductsItem;
