import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Branding = () => {
  const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: "70vh",
    backgroundColor: "rgba(122, 178, 89, 0.15)",
    padding: theme.spacing(4),
    margin: "4rem 0",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  // use 'Stack' to get horizontal gap. It's just grid using gap.
  // Box is a 'div' and Typography is a 'p' tag

  return (
    <BrandingWrapper>
      <Stack spacing={5}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          Let's Grow Your Brand <br />
          To The Next Level
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
          molestias ipsam iste? Eligendi nihil eius beatae odit dignissimos
          reiciendis!
        </Typography>
        <Button variant="contained" sx={{ width: "50%" }}>
          Hire Us
        </Button>
      </Stack>
      <Box sx={{ width: "50%" }}>
        <img
          src="https://i.ibb.co/sPXVMbC/Frame.png"
          alt="branding"
          style={{ width: "100%" }}
        />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
