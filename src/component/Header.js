import React, { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import logo from '../store-icon.jpg'
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Header() {
  const {itemCount} = useContext(CartContext);
  return (
    <div>
      <Navbar bg="red" expand="lg">
        <Container>
        <Navbar.Brand href="/"><img className="header__logo" src={logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Brand href="/">GG Online Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/products">Products</Link>
              {/* <Nav.Link href="#link">Login</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <SearchIcon />
            </Button>
          </Form>
          <Link styele={{textDecoration:"none"}} to="/cart"> <ShoppingCartIcon /> {itemCount} </Link>
         
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
