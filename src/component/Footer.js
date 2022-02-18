import React from "react";
import "../App.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Flag from "../16.png";
import { Container, Nav, Navbar, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <div className="copyRight">
        <p>
          copyright
          <CopyrightIcon />
          2022 React store all right reserve.
        </p>
      </div>

      <div className="flag-wrapper">
        <img src={Flag} /> United States
      </div>
    </div>
  );
}

export default Footer;
