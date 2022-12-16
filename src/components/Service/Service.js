import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        pt: 2,
        mx: "auto",
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        sx={{
          width: "auto",
          mx: "auto",
        }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          WEb & Mobile design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ut
          alias, quas asperiores a excepturi.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
