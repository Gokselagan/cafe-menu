import { Box } from "@mui/material";
import { ProductCard } from "../../_shared";
import items, { itemIds } from "../../utils/menuItems";
import { Link } from "react-router-dom";

const CategoryItems = ({
  section,
}: {
  section: "hotDrinks" | "coldDrinks" | "sandwiches" | "desserts";
}) => {
  return (
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
      {itemIds[section].map((itemId) => (
        <Link
          to={`/${section}/${items[section][itemId].name}`}
          style={{ textDecoration: "none" }}
        >
          <ProductCard
            key={itemId}
            image={items[section][itemId].image}
            name={items[section][itemId].name}
            description={items[section][itemId].description}
          />
        </Link>
      ))}
    </Box>
  );
};

export default CategoryItems;
