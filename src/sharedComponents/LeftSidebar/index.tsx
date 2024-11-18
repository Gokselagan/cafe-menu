import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        writingMode: "vertical-rl",
        bgcolor: "#2c1e1e",
        height: "500px",
        width: "35px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "24px 0px 0px 24px",
        gap: "25px",
        transform: "rotate(180deg)",
      }}
    >
      <Link to="/hotDrinks" style={{ textDecoration: "none", color: "#fff" }}>
        Hot Drinks
      </Link>

      <Link to="/coldDrinks" style={{ textDecoration: "none", color: "#fff" }}>
        Cold Drinks
      </Link>

      <Link to="/desserts" style={{ textDecoration: "none", color: "#fff" }}>
        Dessert
      </Link>

      <Link to="/sandwiches" style={{ textDecoration: "none", color: "#fff" }}>
        Sandwiches
      </Link>
    </Stack>
  );
};

export default LeftSidebar;
