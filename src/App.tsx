import React from "react";
import { Container, Avatar, Box, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Title, LeftSidebar, SearchBar, BottomNavigation } from "./_shared";
import CategoryItem from "./modules/category";
import HomePage from "./modules/homepage";
import ProductDetails from "./modules/productDetails";
import SearchResults from "./modules/searchResults";

const App = () => {
  return (
    <Container
      className="app"
      maxWidth={false}
      sx={{ maxWidth: "430px", height: "832px", overflow: "hidden" }}
    >
      <Container
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          paddingTop: "10px",
          width: "375px",
        }}
      >
        <Stack>
          <Stack flexGrow={1} direction="row" justifyContent="space-between">
            <Stack direction="column" alignItems="flex-start">
              <Title color={"#2c1e1e"}>Coffeemania</Title>
              <Title color={"#fff"}>Next</Title>
            </Stack>
            <Avatar alt="Cafe picture" src="/assets/coffeemania.png" />
          </Stack>
          <Box mt={2}>
            <SearchBar />
          </Box>
        </Stack>

        <Stack
          direction="row"
          gap="40px"
          flexGrow={1}
          alignItems="center"
          mt={4}
        >
          <Box marginLeft="-51px">
            <LeftSidebar />
          </Box>
          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              height: "500px",
            }}
          >
            <Routes>
              <Route
                path="hotDrinks"
                element={<CategoryItem section="hotDrinks" />}
              />
              <Route
                path="coldDrinks"
                element={<CategoryItem section="coldDrinks" />}
              />
              <Route
                path="sandwiches"
                element={<CategoryItem section="sandwiches" />}
              />
              <Route
                path="desserts"
                element={<CategoryItem section="desserts" />}
              />
              <Route
                path="/:category/:productName"
                element={<ProductDetails />}
              />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Box>
        </Stack>

        <Box
          sx={{
            bgcolor: "#2c1e1e",
            color: "#fff",
            borderRadius: "24px",
            width: "100%",
            margin: "auto 0px 20px 13px",
          }}
        >
          <BottomNavigation />
        </Box>
      </Container>
    </Container>
  );
};

export default App;
