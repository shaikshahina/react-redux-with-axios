import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts,fetchProducts } from "../redux/Actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
    const products = useSelector((state)=> state.allProducts.products)
    console.log(products)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  
    console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;