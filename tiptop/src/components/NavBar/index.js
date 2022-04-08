import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

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
            <Styled.LinkStyled to="shop/*">Shop</Styled.LinkStyled>
            <Styled.LinkStyled to="login/">Login</Styled.LinkStyled>
            <Styled.LinkStyled to="checkout/">Checkout</Styled.LinkStyled>
          </Styled.LinkContainerStyled>
        </Styled.ToolBarStyled>
      </Styled.AppBarStyled>
    </div>
  );
};

export default NavBar;
