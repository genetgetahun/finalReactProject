import { createContext, useState } from "react";
const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const itemCount = cart.length;
  let totalQuantity = 0;
  cart.map((item) => (totalQuantity += item.quantity));

  const addProduct = (product, quantity) => {
    // adding new product
    if (
      cart.length === 0 ||
      !cart.find((item) => item.product.id === product.id)
    ) {
      cart.push({
        product,
        quantity: Number(quantity),
      });
    } else {
      // Updating existing product
      let index = cart.findIndex((item) => item.product.id === product.id);
      cart[index].quantity += Number(quantity);
    }
    setCart([...cart]);
  };

  const removeProduct = (product) => {
    let index = cart.findIndex(
      (item) => item.product.id === product.product.id
    );
    cart.splice(index, 1);

    setCart([...cart]);
  };
  const incrementQuantity = (product) => {
    // Updating existing product
    let index = cart.findIndex(
      (item) => item.product.id === product.product.id
    );
    cart[index].quantity += 1;
    setCart([...cart]);
  };

  const decrementQuantity = (product) => {
    // Updating existing product
    let index = cart.findIndex(
      (item) => item.product.id === product.product.id
    );
    if (cart[index].quantity < 1) {
      cart[index].quantity = 0;
    } else {
      cart[index].quantity -= 1;
    }

    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    itemCount,
    addProduct,
    removeProduct,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    totalQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
