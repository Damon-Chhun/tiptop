import React from "react";
import { Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import * as Styled from "./index.styled";

const NavBar = () => {
  return (
    <div>
      <Styled.AppBarStyled position="static">
        <Styled.ToolBarStyled>
          <Styled.LinkHomeStyled to="/">
            <Typography variant="h4">TipTop</Typography>
          </Styled.LinkHomeStyled>
          <Styled.LinkContainerStyled>
            <Styled.LinkStyled to="shop/">Shop</Styled.LinkStyled>
            <Styled.LinkStyled to="login/">Login</Styled.LinkStyled>
            <Styled.LinkStyled to="checkout/">Checkout</Styled.LinkStyled>
          </Styled.LinkContainerStyled>
          <div style={{ width: "33%", textAlign: "center" }}>
            <ShoppingCart />
          </div>
        </Styled.ToolBarStyled>
      </Styled.AppBarStyled>
    </div>
  );
};

export default NavBar;
