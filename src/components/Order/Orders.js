import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
const Orders = () => {
  const { products, inititalCart } = useLoaderData();
  const [cart, setCart] = useState(inititalCart);
// hello this is 
  const clearCart = () => {
    setCart([]);
    removeFromDb();
  };

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
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
        {cart.length === 0 && (
          <h2>
            Please <Link to="/">Shop</Link> now.
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};
export default Orders;
