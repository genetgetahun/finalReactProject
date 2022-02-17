import { createContext, useEffect, useState } from "react";
const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        });
    };
    getProducts();
  }, []);

  const value = {
    products,
    setProducts,
    searchedProducts,
    setSearchedProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
