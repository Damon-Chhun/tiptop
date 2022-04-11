import React from "react";
import {
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
  ThemeProvider,
} from "@mui/material";

import { theme } from "../../styles/theme/palette";

import * as Styled from "./card.styled";
import "./card.sass";

const Cards = ({ data }) => {
  console.log(data, "card data");

  return (
    <Styled.MUICard>
      <img className="image" src={data.imageUrl} alt={data.name} />
      <CardContent>
        <div className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${data.price}
          </Typography>
          <ThemeProvider theme={theme}>
            <Styled.MUIButton color="primary" variant="contained">
              See Product
            </Styled.MUIButton>
          </ThemeProvider>
        </div>
      </CardContent>
    </Styled.MUICard>
  );
};

export default Cards;
