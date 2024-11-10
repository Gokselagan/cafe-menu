import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { BottomNavigation } from "../../shared-components/bottom-navigation/index.tsx";
import { Title1 } from "../../shared-components/Typography/Title1/index.tsx";
import cafePicture from "../../assets/coffeemania.jpg";
import { SearchBar } from "../../shared-components/SearchBar/index.tsx";

export const Home = () => {
  return (
    <Container
      component="main"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Stack flexGrow={1} direction="row" justifyContent="space-between">
        <Stack direction="column" alignItems="flex-start">
          <Title1 color={"#2c1e1e"}>Coffeemania</Title1>
          <Title1 color={"#fff"}>Next</Title1>
        </Stack>
        <Avatar alt="Cafe picture" src={cafePicture} />
      </Stack>
      <Box>
        <SearchBar />
      </Box>
      <Box
        sx={{
          bgcolor: "#2c1e1e",
          color: "#fff",
          borderRadius: "24px",
          width: "100%",
        }}
      >
        <BottomNavigation />
      </Box>
    </Container>
  );
};
