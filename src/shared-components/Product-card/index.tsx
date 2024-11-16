import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

export const ProductCard = ({ image, name, description }: ProductCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 145,
        maxHeight: 145,
        width: "45%",
        borderRadius: "24px 24px 4px 4px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            fontSize="10px"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Typography
            fontSize="8px"
            textAlign="left"
            sx={{ color: "text.secondary" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
