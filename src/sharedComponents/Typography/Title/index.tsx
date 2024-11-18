import React from "react";
import { Typography } from "@mui/material";

interface TitleProps {
  children: string;
  color: string;
}

const Title = ({ children, color }: TitleProps) => {
  return (
    <Typography color={color} variant="h4" fontWeight="bold">
      {children}
    </Typography>
  );
};

export default Title;
