import React, { createContext, useEffect, useState } from "react";

export const ProducContent = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProducContent.Provider value={{ products }}>
      {children}
    </ProducContent.Provider>
  );
};

export default ProductProvider;
