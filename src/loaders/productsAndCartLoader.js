export const productsAndCartLoader = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();
};
