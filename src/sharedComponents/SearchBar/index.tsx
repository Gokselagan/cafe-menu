import { alpha, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { items } from "../../_shared";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 4,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "22ch",
      },
    },
  },
}));

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<{ name: string }[]>([]);
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const results: { name: string }[] = [];
    Object.values(items).forEach((category) => {
      Object.values(category).forEach((item) => {
        if (item.name.toLowerCase().includes(query)) {
          results.push(item);
        }
      });
    });
    setFilteredItems(results);

    if (query) {
      navigate("/search", { state: { results } });
    } else {
      navigate("/");
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Browse your favourite..."
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={handleSearch}
      />
    </Search>
  );
};

export default SearchBar;
