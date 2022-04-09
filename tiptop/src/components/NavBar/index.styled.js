import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const AppBarStyled = styled(AppBar, {
  name: "AppBar",
  slot: "Wrapper",
})({
  backgroundColor: "#000000",
});
export const ToolBarStyled = styled(Toolbar, {
  name: "ToolBar",
  slot: "Wrapper",
})({
  display: "flex",
  justifyContent: "space-between",
});

export const LinkHomeStyled = styled(Link, {
  name: "LinkHome",
  slot: "Wrapper",
})({
  textDecoration: "none",
  color: "#FFFFFF",
});

export const LinkStyled = styled(Link, {
  name: "Link",
  slot: "Wrapper",
})({
  textDecoration: "none",
  color: "#FFFFFF",
});

export const LinkContainerStyled = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
});
