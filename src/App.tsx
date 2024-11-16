import React from "react";
import { Home } from "./modules/homepage/index.tsx";
import { hotDrinks } from "./data/menuItems.tsx";
import { Container } from "@mui/material";
import { AppRouter } from "./AppRouter.tsx";

export const App = () => {
  return (
    <Container
      className="app"
      maxWidth={false}
      sx={{ maxWidth: "375px", height: "820px" }}
    >
      <AppRouter />
    </Container>
  );
};
