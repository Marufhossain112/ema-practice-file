import React from "react";
import { useLoaderData } from "react-router-dom";
const Orders = () => {
  const { products, inititalCart } = useLoaderData();
  // console.log(products);
  return (
    <div>
      <h2>This is an orders {products.length}</h2>
      <p>Ordered items {inititalCart.length}</p>
    </div>
  );
};
export default Orders;
