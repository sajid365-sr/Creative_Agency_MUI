import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#111430",
        py: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            Creative Agency
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Creative Agency
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.green",
                ml: 2,
                "&:hover": {
                  bgcolor: "primary.green",
                },
                textTransform: "capitalize",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Divider
          sx={{
            mt: 3,
            bgcolor: "rgba(255,255,255,0.7)",
          }}
        />
      </Container>
    </Box>
  );
};

export default Footer;
