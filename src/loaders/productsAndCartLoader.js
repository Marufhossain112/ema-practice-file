import { getStoredCart } from "../utilities/fakedb";
export const productsAndCartLoader = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  // get cart
  const savedCart = getStoredCart();
  // console.log(products);

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    console.log(addedProduct);
  }
  return products;
};
