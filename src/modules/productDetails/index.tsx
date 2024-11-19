import { useNavigate, useParams } from "react-router-dom";
import { items } from "../../_shared";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";

const ProductDetails = () => {
  const { category, productName } = useParams<{
    category: string;
    productName: string;
  }>();

  const product = Object.values(items[category as keyof typeof items]).find(
    (item: { name: string }) =>
      item.name.toLowerCase() === productName?.toLowerCase()
  );

  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="5px"
    >
      <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
        {product?.name}
      </Typography>
      <Box sx={{ display: "flex", mr: "30px" }}>
        <IconButton
          onClick={handleGoBack}
          sx={{
            color: "#fff",
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <ArrowBack fontSize="large" />
        </IconButton>

        <img
          src={product?.image}
          alt={product?.name}
          width="200px"
          height="250px"
          style={{
            borderRadius: "24px",
          }}
          onClick={handleImageClick}
        />
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent
          sx={{
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(44, 30, 30, 0.8)",
          }}
        >
          <img
            src={product?.image}
            alt={product?.name}
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </DialogContent>
      </Dialog>
      <Typography variant="body1" sx={{ color: "#fff", textAlign: "start" }}>
        {product?.description}
      </Typography>
    </Stack>
  );
};

export default ProductDetails;
