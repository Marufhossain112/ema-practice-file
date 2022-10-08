import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
const Orders = () => {
  const { products, inititalCart } = useLoaderData();
  const [cart, setCart] = useState(inititalCart);

  const handleRemoveItem = (id) => {
    console.log(id);
  };

  // console.log(products);
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Orders;
