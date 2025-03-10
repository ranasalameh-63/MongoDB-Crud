import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetchProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm refresh={getProducts} />
      <ProductList products={products} refresh={getProducts} />
    </div>
  );
};

export default App;
