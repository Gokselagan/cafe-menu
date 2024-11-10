import { Typography } from "@mui/material";
import React from "react";

interface Title1Props {
  children: string;
  color: string;
}

export const Title1 = ({ children, color }: Title1Props) => {
  return (
    <Typography color={color} variant="h4" fontWeight="bold">
      {children}
    </Typography>
  );
};
