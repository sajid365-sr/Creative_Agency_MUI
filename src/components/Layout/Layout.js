import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Box>
        <Container>
            <Header></Header>
          <Outlet></Outlet>
        </Container>
      </Box>
    </div>
  );
};

export default Layout;
