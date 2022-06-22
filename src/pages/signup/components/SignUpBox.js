import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "./SignUpForm";

function SignUpBox() {
  return (
    <Grid item>
      <Paper elevation={3}>
        <Typography variant="h6" style={{ paddingTop: "20px" }}>
          Sign Up
        </Typography>
        <SignUpForm />
      </Paper>
    </Grid>
  );
}

export default SignUpBox;
