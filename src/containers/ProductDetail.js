import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  fetchProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        {Object.keys(product).length === 0 ? (
          <div>...loading</div>
        ) : (
          <div className="ui placeholder segment">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{category} $</p>
            <p>price: {price} $</p>
            <p> {description} $</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
