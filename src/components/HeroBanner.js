import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/gym2.avif";

const HeroBanner = () => (
  <Box
    sx={{mt: { lg: "100px", xs: "70px" }, ml: { sm: "50px" }}}

    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="32px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="20px"
      mt="30px"
      color="white"
     
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px"  lineHeight="35px" color="white">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "250px",
          textAlign: "center",
          background: "#FF2625",
          padding: "16px",
          fontSize: "20px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
          fontFamily: "Radio Canada Big"
          
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{
        marginTop:'1px',
        width: "600px",
        height: "800px",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.50)",
      }}
    />
  </Box>
);

export default HeroBanner;
