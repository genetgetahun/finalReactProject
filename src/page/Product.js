import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  function itemClicked() {
    console.log("Selected PRoduct id : ", product.id);
    let path = `/products/${product.id}`;
    navigate(path, { state: { product: product } });
  }
  return (
    <div className="container" onClick={itemClicked}>
      <img className="productImage" src={product.image} alt="product" />
      <div>{product.title}</div>
      <div style={{ textTransform: "uppercase", fontSize: "1.5rem" }}>
        ${product.price}
      </div>

      {/* <CardActionArea disableSpacing style={{display:'flex',justifyContent:'flex-end'}}>
       <IconButton aria-label="add to card">
         <AddShoppingCart/>
       </IconButton>
       </CardActionArea> */}
    </div>
  );
}

export default Product;
