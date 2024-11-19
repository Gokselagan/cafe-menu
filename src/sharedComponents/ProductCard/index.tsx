import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Player } from "@lottiefiles/react-lottie-player";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

const ProductCard = ({ image, name, description }: ProductCardProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Card
      sx={{
        maxWidth: 145,
        maxHeight: 165,
        width: "100%",
        borderRadius: "24px 24px 4px 4px",
      }}
    >
      {!isLoaded && (
        <Player
          autoplay
          loop
          src="/assets/isLoadedAnimation.json"
          style={{ height: "95px", width: "100%" }}
        />
      )}
      <CardActionArea
        onLoad={() => setIsLoaded(true)}
        sx={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
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
};

export default ProductCard;
