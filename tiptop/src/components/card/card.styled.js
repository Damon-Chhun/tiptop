import { Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { textAlign } from "@mui/system";

export const MUICard = styled(Card, {
  name: "MUICard",
  slot: "Wrapper",
})({
  margin: 10,
  height: 600,
  width: 300,
});

export const MUICardContent = styled(CardContent, {
  name: "CardContent",
  slot: "Wrapper",
})({
  border: "2px black solid",
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 0,
});

export const MUIButton = styled(Button, {
  name: "MUIButton",
  slot: "Button",
})({});
