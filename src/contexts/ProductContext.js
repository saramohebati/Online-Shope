import React, { createContext, useEffect, useState } from "react";

export const ProducContext = createContext();

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
    <ProducContext.Provider value={{ products }}>
      {children}
    </ProducContext.Provider>
  );
};

export default ProductProvider;
