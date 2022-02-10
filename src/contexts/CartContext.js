import { createContext, useEffect, useState } from "react";
import App from "../App";
const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const cartItems = Object.values(cart);
  const itemCount = cartItems.length;

  const addProduct = (product, quantity) => {
    // adding new product
    if (!cart[product.id]) {
      setCart({
        ...cart,
        [product.id]: { product, quantity: Number(quantity) },
      });
    } else {
      // Updating existing product
      let existingProduct = cart[product.id];
      let existingQuanity = existingProduct?.quantity;
      setCart({
        ...cart,
        [product.id]: { product, quantity: existingQuanity + Number(quantity) },
      });
    }
  };
  const removeProduct = (product) => {
    if (cart[product.product.id]) {
      const filteredList = cartItems.filter(
        (item) => item.product.id !== product.product.id
      );

      setCart(Object.fromEntries(filteredList));
    }
  };
  const clearCart = () => {
    setCart({});
  };

  const value = {
    cart,
    addProduct,
    removeProduct,
    clearCart,
    itemCount,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
