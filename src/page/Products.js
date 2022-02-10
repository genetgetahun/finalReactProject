import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProducts(json);
        });
    };
    getProducts();
  }, []);

  return (
    <main>
      {/* <ProductDetails product={products} /> */}

      <Grid container justify="center" spacing={4}>
        {/* <ProductDetails product={products} />  */}
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
