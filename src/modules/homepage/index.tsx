import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { BottomNavigation } from "../../shared-components/bottom-navigation/index.tsx";
import { Title1 } from "../../shared-components/Typography/Title1/index.tsx";
import cafePicture from "../../assets/coffeemania.jpg";
import { SearchBar } from "../../shared-components/SearchBar/index.tsx";
import { LeftSideBar } from "../../shared-components/leftside-bar/index.tsx";
import { ProductCard } from "../../shared-components/Product-card/index.tsx";
import { MenuItem } from "../../data/menuItems.tsx";
import { hotDrinks } from "../../data/menuItems.tsx";

export const Home = ({ hotItems }: { hotItems: MenuItem[] }) => {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingTop: "10px",
        width: "375px",
      }}
    >
      <Stack>
        <Stack flexGrow={1} direction="row" justifyContent="space-between">
          <Stack direction="column" alignItems="flex-start">
            <Title1 color={"#2c1e1e"}>Coffeemania</Title1>
            <Title1 color={"#fff"}>Next</Title1>
          </Stack>
          <Avatar alt="Cafe picture" src={cafePicture} />
        </Stack>
        <Box mt={2}>
          <SearchBar />
        </Box>
      </Stack>

      <Stack direction="row" gap="40px" flexGrow={1} alignItems="center" mt={4}>
        <Box marginLeft="-48px">
          <LeftSideBar />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          {hotItems.map((hotItem) => (
            <ProductCard
              key={hotItem.id}
              image={hotItem.image}
              name={hotItem.name}
              description={hotItem.description}
            />
          ))}
        </Box>
      </Stack>

      <Box
        sx={{
          mt: "auto",
          bgcolor: "#2c1e1e",
          color: "#fff",
          borderRadius: "24px",
          width: "100%",
          mb: "20px",
        }}
      >
        <BottomNavigation />
      </Box>
    </Container>
  );
};
