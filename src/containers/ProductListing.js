import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const fetchProducts = async()=> {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log('err', err)
    });
    console.log(response.data)
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div>
      <h1>ProductListing</h1>
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
