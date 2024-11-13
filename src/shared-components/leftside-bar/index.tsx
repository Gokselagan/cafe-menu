import { Button, Stack } from "@mui/material";
import React from "react";

export const LeftSideBar = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        writingMode: "vertical-rl",
        bgcolor: "#2c1e1e",
        height: "350px",
        justifyContent: "center",
        borderRadius: "24px",
        marginLeft: "0px",
        transform: "rotate(180deg)",
      }}
    >
      <Button sx={{ color: "#fff" }}>Hot Drinks</Button>
      <Button sx={{ color: "#fff" }}>Cold Drinks</Button>
      <Button sx={{ color: "#fff" }}>Desserts</Button>
    </Stack>
  );
};
