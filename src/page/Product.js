import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import CurrencyFormat from "react-currency-format";
import { ProductContext } from "../contexts/ProductContext";

function Product({ product }) {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  let suggestedProducts = [];

  const getSuggestions = () => {
    let currentProductCategory = product.category;
    suggestedProducts = products.filter(
      (item) => item.category === currentProductCategory
    );
  };

  function itemClicked() {
    getSuggestions();
    let path = `/products/${product.id}`;
    navigate(path, {
      state: { product: product, suggestedProducts: suggestedProducts },
    }); // pass product as props for product detail
  }
  return (
    <div className="container" onClick={itemClicked}>
      <img className="productImage" src={product.image} alt="product" />
      <div>{product.title}</div>
      <div style={{ textTransform: "uppercase", fontSize: "1.5rem" }}>
        <CurrencyFormat
          decimalScale={2}
          value={product.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          fixedDecimalScale={true}
        />
      </div>

      <div>
        <Rating disabled value={product.rating.rate} />
      </div>
    </div>
  );
}

export default Product;
