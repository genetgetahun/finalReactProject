import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CurrencyFormatter from "react-currency-format";
import Icon from "@material-ui/core/Icon";

function CartItem({ product }) {
  const { removeProduct, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

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
            decimalScale={2}
            value={product.product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
      </div>
      <div className="col-sm-2 p-2">
        <p className="mb-0">Qty: {product.quantity}</p>
      </div>
      <div className="col-sm-2 p-2">
        <p className="mb-0">
          Total:
          <CurrencyFormatter
            decimalScale={2}
            value={product.quantity * product.product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
      </div>
      <div className="col-sm-1 p-2">
        <Icon color="primary" onClick={() => incrementQuantity(product)}>
          add_circle
        </Icon>
        <Icon color="primary" onClick={() => decrementQuantity(product)}>
          remove_circle
        </Icon>
      </div>
      <div className="col-sm-1 p-2">
        <Icon color="secondary" onClick={() => removeProduct(product)}>
          delete
        </Icon>
      </div>
    </div>
  );
}

export default CartItem;
