import { Box, Grid } from "@mui/material";
import React from "react";
import Service from "../../../components/Service/Service";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const serviceImages = [
  "https://i.ibb.co/HNhykGp/iphone-1.png",
  "https://i.ibb.co/r0gHkvM/color-palette-1.png",
  "https://i.ibb.co/CvQwzKC/coding-1.png",
];



const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide awesome" colored="Services" />
      <Grid container spacing={2}>
        {serviceImages.map((image, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Service image={image}></Service>
          </Grid>
        ))}
        
      
      </Grid>
    </Box>
  );
};

export default Services;
