import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1">Landing Page</Typography>
      <Typography variant="h4">Work in Progress...</Typography>
      <br />
      <Button variant="outlined" onClick={() => navigate("/login")}>
        Go to Login Page
      </Button>
    </div>
  );
}

export default LandingPage;
