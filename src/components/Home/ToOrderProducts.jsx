import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingOrderProducts,
  decendingOrderProducts,
} from "../../store/slices/products.slice";

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrderProducts());
  };

  const handleDecending = () => {
    dispatch(decendingOrderProducts());
  };

  return (
    <div>
      <button onClick={handleAscending}>Ascending Order</button>
      <button onClick={handleDecending}>Descending Order</button>
    </div>
  );
};

export default ToOrderProducts;
