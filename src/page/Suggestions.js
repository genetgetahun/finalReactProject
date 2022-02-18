import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

function Suggestions({ productsList }) {
  return (
    <main className="mainPage">
      <Grid container justifyContent="center" spacing={4}>
        {productsList?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Suggestions;
