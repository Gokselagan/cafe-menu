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

const ProductCard = ({ image, name, description }: ProductCardProps) => (
  <Card
    sx={{
      maxWidth: 145,
      maxHeight: 165,
      width: "45%",
      borderRadius: "24px 24px 4px 4px",
    }}
  >
    <CardActionArea>
      <CardMedia component="img" height="95" image={image} alt="ürün resmi" />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          fontSize="10px"
          fontWeight="bold"
          textAlign="center"
        >
          {name}
        </Typography>
        <Typography
          fontSize="8px"
          textAlign="left"
          sx={{
            color: "text.secondary",
            opacity: 0.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ProductCard;
