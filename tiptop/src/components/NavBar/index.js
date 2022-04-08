import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h4">TipTop</Typography>
          </Link>
          <div>
            <Link to="shop/*">Shop</Link>
            <Link to="login/">Login</Link>
            <Link to="checkout/">Checkout</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
