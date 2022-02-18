import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Cart() {
  const { itemCount, cart, clearCart } = useContext(CartContext);
  return (
    <div>
      <div className="row no-gutters justify-content-center">
        <div className="col-sm-9 p-3">
          {/* if cart is not empty render cart items by calling cartitem component */}
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <CartItem product={item} />
              ))}
            </div>
          ) : (
            <div className="p-3 text-center text-muted">Your cart is empty</div>
          )}
        </div>

        <div
          className="col-sm-4 justify-content-center"
          style={{ display: "flex" }}
        >
          <div className="button">
            <Button
              component={Link}
              to={"/checkout"}
              variant="contained"
              color="primary"
            >
              CHECKOUT
            </Button>
          </div>
          <div className="button">
            <Button variant="contained" color="secondary" onClick={clearCart}>
              CLEAR CART
            </Button>
          </div>
          <div className="button">
            <Button
              component={Link}
              to={"/"}
              variant="contained"
              color="primary"
            >
              BUY MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
