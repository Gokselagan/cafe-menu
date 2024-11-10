import HomeIcon from "@mui/icons-material/Home";
import { Stack, Typography } from "@mui/material";
import React from "react";

export const BottomNavigation: React.FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: "#2c1e1e",
        color: "#fff",
        borderRadius: "24px",
        padding: "10px",
      }}
    >
      <div>
        <HomeIcon fontSize="large" />
        <Typography fontSize="small">Home</Typography>
      </div>
    </Stack>
  );
};
