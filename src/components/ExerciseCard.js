import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}
  style={{
    display: "block",
    textDecoration: "none",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Add shadow here
    borderRadius: "10px", // Optionally, add border radius for a smooth effect
    overflow: "hidden", // Ensure content doesn't overflow the card
    transition: "transform 0.3s ease-in-out", // Add smooth hover effect
  }}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "10px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "10px",
          textTransform: "capitalize",
          fontFamily: "Radio Canada Big",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontFamily="Radio Canada Big"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
