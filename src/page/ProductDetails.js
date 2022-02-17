import "../App.css";
import React, { useContext } from "react";
import { Card, Typography, Button, TextField } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const { addProduct } = useContext(CartContext);
  let inputQuantity = 1;
  const location = useLocation(); // represent and hold all object of that URL
  let { product } = location.state;

  return (
    <Card sx={{ maxWidth: 345 }} className="mainPage">
      <div style={{ display: "flex" }}>
        <img style={{ width: "30%", height: "10%" }} src={product.image} alt="" />
        <div style={{ margin: "50px" }}>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              ${product.price}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {product.category}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {product.description}
            </Typography>
          </div>
          <div>
            <TextField
              type="number"
              defaultValue={inputQuantity}
              helperText="Enter Quantity"
              onInput={(e) => e.target.value < 1 ? e.target.value = 1 : inputQuantity = e.target.value}
            />
          </div>
          <div style={{ padding: "5%" }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => addProduct(product, inputQuantity)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProductDetails;
