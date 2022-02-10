import React from "react";

function Checkout() {
  return (
    <form>
      <div>
        <div>
          <input type="text" placeholder=" Name" name="Name" value="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Shiping Address"
            name="Shiping Address"
            value=""
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Billing Address"
            name="Billing Address"
            value=""
          />
        </div>
        <div>
          <input type="email" placeholder="Credit Card Info" name="" value="" />
        </div>
        <div>
          <button type="submit">Order</button>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
