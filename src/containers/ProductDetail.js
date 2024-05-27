import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";


const ProductDetail = () => {
  const product = useSelector((state)=>state.product)
  const {image, title, price, category, description} = product;
  const { productId } = useParams();
  const dispatch = useDispatch()
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err ", err));

      dispatch(selectedProduct(response.data))
  };
  useEffect(()=>{
    if (productId && productId !==''){
      fetchProductDetail()
    }
  }, [productId])
  return (
    <div className='ui grid container'>
      <div className="ui placeholder segment">
      <div className="ui placeholder segment"></div>
      </div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
