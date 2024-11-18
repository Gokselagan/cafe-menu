import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BottomNavigation: React.FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: "#2c1e1e",
        color: "#fff",
        borderRadius: "24px",
        padding: "5px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <HomeIcon fontSize="large" />
        <Typography fontSize="small">Home</Typography>
      </Link>
    </Stack>
  );
};

export default BottomNavigation;
