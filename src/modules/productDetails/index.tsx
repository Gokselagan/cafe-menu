import { useNavigate, useParams } from "react-router-dom";
import { items } from "../../_shared";
import {
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
      <IconButton onClick={handleGoBack}>
        <ArrowBack />
      </IconButton>
      <img
        src={product?.image}
        alt={product?.name}
        width="250px"
        height="250px"
        style={{
          borderRadius: "24px",
        }}
        onClick={handleImageClick}
      />
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
              maxWidth: "350px",
              maxHeight: "90vh",
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
