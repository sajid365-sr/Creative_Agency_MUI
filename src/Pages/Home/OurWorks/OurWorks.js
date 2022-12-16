import { Box, Grid, IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import { cardData } from "./CardData";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 5 }}>
      {/* Heading section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb:5
        }}
      >
        <SectionTitle
          title="Here are some of"
          colored="our works"
        ></SectionTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile Application" />
          </Tabs>
          <Box>
            <IconButton
              sx={{
                border: theme => `1px solid ${value === 0? '#959EAD' : theme.palette.primary.main}`,

                color:'primary.main',
                mr: 2,
              }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              sx={{
                border: theme => `1px solid ${value === 2? '#959EAD' : theme.palette.primary.main}`,
                color:'primary.main'
              }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowBackIcon sx={{ rotate: "180deg" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Card Section */}
      <Box>
        <Grid container spacing={3} justifyContent='center'>
          {cardData[value].map((image) => (
            <Grid item>
              <CreativeCard image={image}></CreativeCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurWorks;
