import { Link, useLocation } from "react-router-dom";
import { ProductCard } from "../../_shared";
import { Box, Typography } from "@mui/material";

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  console.log("eeerere", results);
  return (
    <div>
      <Typography
        sx={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "32px",
          mb: "35px",
        }}
      >
        Search Results
      </Typography>
      {results.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
            maxWidth: "500px",
            overflow: "auto",
            height: "calc(100vh - 250px)",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {results.map(
            (res: {
              id: string;
              name: string;
              description: string;
              image: string;
            }) => (
              <ProductCard
                key={res.id}
                image={res.image}
                name={res.name}
                description={res.description}
              />
            )
          )}
        </Box>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
