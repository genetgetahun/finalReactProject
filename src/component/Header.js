import React, { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

function Header() {
  const { products, setSearchedProducts } = useContext(ProductContext);
  const { totalQuantity } = useContext(CartContext);
  const [searchInput, setSearchInput] = useState("");

  const categories = Array.from(new Set(products.map((item) => item.category)));
  categories.push("All");

  const searchItem = () => {
    if (searchInput !== "") {
      let filteredProducts = products.filter((item) =>
        //to solve the case sensitive nature of includes()
        item.title.toUpperCase().includes(searchInput.toUpperCase())
      );
      setSearchedProducts(filteredProducts);
    } else {
      setSearchedProducts([]);
    }
  };

  //get the category name from dropdown as item and filter products'
  //category with the selected dropdown item
  const filterByCategory = (selected) => {
    let filtered = [];
    if (selected == "All") {
      setSearchedProducts(products);
    } else {
      filtered = products.filter((item) => item.category == selected);
      setSearchedProducts(filtered);
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid="md">
          <Navbar.Brand>
            <Link style={{ textDecoration: "none" }} to="/">
              Online Store
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{ textDecoration: "none" }} to="/products">
                Products
              </Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown
            style={{ textDecoration: "none" }}
            title=" Category"
            id="collasible-nav-dropdown"
          >
            {categories.map((item) => (
              <NavDropdown.Item
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => filterByCategory(item)}
              >
                {item}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button variant="outline-success" onClick={searchItem}>
              <SearchIcon />
            </Button>
          </Form>
          <Link style={{ textDecoration: "none" }} to="/cart">
            {" "}
            <ShoppingCartIcon /> {totalQuantity}
            {""}
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
