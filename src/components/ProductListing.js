import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrdouctComponent from "./ProductComponent";
import {fetchProducts} from '../actions/productActions'

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log("products==>>",products);

  return (
    <div className="ui grid container">
      <PrdouctComponent />
    </div>
  );
};

export default ProductListing;
