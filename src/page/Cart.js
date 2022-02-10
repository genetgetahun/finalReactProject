import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import CurrencyFormatter from "react-currency-format";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Cart() {
  const { itemCount, cartItems, clearCart } = useContext(CartContext);
  let total = 0;
  if (cartItems.length > 0) {
    total = cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  return (
    <div>
      <div className="row no-gutters justify-content-center">
        <div className="col-sm-9 p-3">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((product) => (
                <CartItem product={product} />
              ))}
            </div>
          ) : (
            <div className="p-3 text-center text-muted">Your cart is empty</div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="col-sm-3 p-3">
            <div className="card card-body">
              <p className="mb-1">Total Items</p>
              <h4 className=" mb-3 txt-right">{itemCount}</h4>
              <p className="mb-1">Total Payment</p>
              <h3 className="m-0 txt-right">
                {" "}
                <CurrencyFormatter
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h3>
              <hr />
              <div style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  size="small"
                  // onClick={}
                >
                  {" "}
                  <Link to="/checkout"> CHECKOUT </Link>
                </Button>

                <Button variant="contained" size="small" onClick={clearCart}>
                  {" "}
                  CLEAR
                </Button>

                <Link to="/">
                  <Button variant="contained" size="small">
                    {" "}
                    BUY MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
