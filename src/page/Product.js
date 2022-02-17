import React from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

function Product({ product }) {
  const navigate = useNavigate();

  function itemClicked() {
    let path = `/products/${product.id}`;
    navigate(path, { state: { product: product } }); // pass product as props for product detail
  }
  return (
    <div className="container" onClick={itemClicked}>
      <img className="productImage" src={product.image} alt="product" />
      <div>{product.title}</div>
      <div style={{ textTransform: "uppercase", fontSize: "1.5rem" }}>
        ${product.price}
      </div>

      <div>
        <Rating disabled value={product.rating.rate} />
      </div>
    </div>
  );
}

export default Product;
