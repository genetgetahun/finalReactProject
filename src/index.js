import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
