import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/homepage/index.tsx";
import { hotDrinks } from "./data/menuItems.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home hotItems={hotDrinks} />} />
      <Route path="hotdrinks" element={"Hot Drinks"} />
      <Route path="colddrinks" element={"Cold Drinks"} />
      <Route path="sandviç" element={"Sandviches"} />
      <Route path="dessert" element={"Desserts"} />
    </Routes>
  );
};
