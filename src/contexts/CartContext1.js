import { CallToActionOutlined } from "@material-ui/icons";
import { createContext, useReducer } from "react";

export const CartContext = createContext([]);

const initialState = {
  cartProducts: [],
  checkout: false,
};
function reducer(state, action) {
  let result;
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.cartProducts.find((product) => product.id === action.product.id)
      ) {
        state.cartProducts.push({
          ...action.product,
          quantity: action.quantity,
        });
      } else {
        let existingProduct = state.cartProducts.filter(
          (product) => product.id === action.product.id
        );
        let existingQuanity = existingProduct?.quantity;
        state.cartProducts.push({
          ...action.product,
          quantity: action.quantity + existingQuanity,
        });
      }
      result = {
        ...state,
        cartProducts: state.cartProducts,
      };

      return result;
    case "REMOVE_ITEM":
      result = {
        ...state,
      };
      return result;
    case "CLEAR":
      return {
        cartProducts: [],
      };
    default:
      throw new Error();
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProduct = (product, quantity) => {
    dispatch({ type: "ADD_ITEM", product, quantity });
  };
  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_ITEM", product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const contextValues = {
    addProduct,
    removeProduct,
    clearCart,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
