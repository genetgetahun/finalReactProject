import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CurrencyFormatter from "react-currency-format";
import { Button } from "@material-ui/core";

function CartItem({ product }) {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.product.title}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.product.image}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{product.product.title}</h5>
        <p className="mb-1">
          Price:{" "}
          <CurrencyFormatter
            value={product.product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
      </div>
      <div className="col-sm-2 p-2 text-center">
        <p className="mb-0">Qty: {product.quantity}</p>
      </div>
      <div className="col-sm-2 p-2 text-center">
        <Button onClick={() => removeProduct(product)}>Delete</Button>
      </div>
    </div>
  );
}

export default CartItem;
