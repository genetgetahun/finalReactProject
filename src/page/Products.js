import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

// const products = [
//   {
//     id: 1,
//     productName: "shoes",
//     description: "Running shoes",
//     price: "$45",
//     image:
//       "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/revolution-5-womens-road-running-shoes-hC41Vf.png",
//   },
//   {
//     id: 2,
//     productName: "shoes",
//     description: "highHell shoes",
//     price: "$45",
//     image:
//       "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/19947281_fpx.tif?$browse$&wid=376&fmt=webp",
//   },
// ];
function Products() {
  const { products, searchedProducts } = useContext(ProductContext);

  let productsList = [];

  if (searchedProducts?.length > 0) {
    productsList = searchedProducts;
  } else {
    productsList = products;
  }

  return (
    <main className="mainPage">
      <Grid container justifyContent="center" spacing={4}>
        {productsList.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
