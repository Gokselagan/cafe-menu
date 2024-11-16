import { Button, Stack } from "@mui/material";
import React from "react";

export const LeftSideBar = () => {
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
      <Button sx={{ color: "#fff" }}>Hot Drinks</Button>
      <Button sx={{ color: "#fff" }}>Cold Drinks</Button>
      <Button sx={{ color: "#fff" }}>Dessert</Button>
      <Button sx={{ color: "#fff" }}>Sandviches</Button>
    </Stack>
  );
};
