import { Player } from "@lottiefiles/react-lottie-player";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#fff", "#7d3a09", "#773301"];
  const animationDuration = 6500;
  const colorsChangeInterval = animationDuration / (colors.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, colorsChangeInterval);
    return () => clearInterval(interval);
  }, [colorsChangeInterval]);

  return (
    <Stack>
      <Typography
        textAlign="center"
        variant="h5"
        sx={{
          color: colors[colorIndex],
          transition: "color 1s ease-in-out ",
          fontWeight: "bold",
        }}
      >
        Coffeemania Next Ürün Bilgi Uygulamasına Hoşgeldiniz!
      </Typography>
      <Player
        autoplay
        loop
        src="/assets/homePageAnimation.json"
        style={{ height: "300px", width: "300px" }}
      />
    </Stack>
  );
};

export default HomePage;
