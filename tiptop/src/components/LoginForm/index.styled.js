import { styled } from "@mui/material/styles";
import { TextField, Button, Paper } from "@mui/material";

export const PageContainer = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const FormContainer = styled("form")({
  width: "55%",
  height: "70%",
  border: "2px grey solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
