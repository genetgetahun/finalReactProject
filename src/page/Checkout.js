import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CurrencyFormatter from "react-currency-format";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

function Checkout() {
  const { itemCount, cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [creditCardInfo, setCreditCardInfo] = useState("");
  const navigate = useNavigate();

  let total = 0;
  if (cart.length > 0) {
    total = cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  const handleClear = () => {
    setName("");
    setShippingAddress("");
    setBillingAddress("");
    setCreditCardInfo("");
  };

  const handleSubmit = () => {
    if (
      name == "" ||
      shippingAddress == "" ||
      billingAddress == "" ||
      creditCardInfo == ""
    ) {
      alert("Please enter all inputs");
    } else {
      alert("Your form is submitted successfully!");
      clearCart();
      navigate("/products");
    }
  };

  return (
    <div className="checkoutContainer">
      <div className="row no-gutters justify-content-center">
        <div className="col-sm-9 p-3">
          {cart.length > 0 ? (
            <div>
              {cart.map((product) => (
                <div className="row no-gutters py-2">
                  <div className="col-sm-2 p-2">
                    <img
                      alt={product.product.title}
                      style={{ margin: "0 auto", maxHeight: "50px" }}
                      src={product.product.image}
                      className="img-fluid d-block"
                    />
                  </div>
                  <div className="col-sm-2 p-2">
                    <h5 className="mb-1">{product.product.title}</h5>
                    <p className="mb-1">
                     $ Price:{" "}
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
                    <p className="mb-0">
                      Total: ${product.quantity * product.product.price}
                     
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3 text-center text-muted">Your cart is empty</div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="col-sm-2 p-3">
            <div className="card card-body">
              <p className="mb-1"><strong>Total Items</strong></p>
              <h4 className=" mb-3 txt-right"> <strong>{itemCount}</strong></h4>
              <p className="mb-1"> <strong>Total Payment</strong></p>
              <h3 className="m-0 txt-right">
                {" "}
                <CurrencyFormatter
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <h4 className="text-center">Checkout Form</h4>
        <form noValidate autoComplete="off">
          <div className="text-center p-2">
            <TextField
              required
              id="standard-required"
              label="Name"
              defaultValue=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="text-center">
            <TextField
              required
              id="standard-required"
              label="Shipping Address"
              defaultValue=""
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
          </div>
          <div className="text-center">
            <TextField
              required
              id="standard-required"
              label="Billing Address"
              defaultValue=""
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
          </div>
          <div className="text-center">
            <TextField
              required
              id="standard-required"
              label="Credit Card Info"
              defaultValue=""
              value={creditCardInfo}
              onChange={(e) => setCreditCardInfo(e.target.value)}
            />
          </div>
          <div className="text-center p-4">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
