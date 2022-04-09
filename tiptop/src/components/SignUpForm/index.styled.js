import { styled } from "@mui/material/styles";
import { TextField, Button, Paper } from "@mui/material";

export const PageContainer = styled("div")({
  height: "100vh",
  width: "100vw",
  border: "3px green solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// export const FormContainer = styled(Paper, {
//   name: "Paper",
//   slot: "Wrapper",
// })({
//   width: "35%",
//   border: "3px green solid",
//   display: "flex",
// });

export const FormContainer = styled("form")({
  width: "55%",
  height: "70%",
  border: "3px green solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
