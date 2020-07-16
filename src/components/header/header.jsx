import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <h1>Insta Clothing</h1>
    </Link>
    <div className="options">
      <Link to="/shop">SHOP</Link>
      <Link TO="/content">CONTENT</Link>
    </div>
  </div>
);

export default Header;
