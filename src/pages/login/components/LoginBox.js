import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";

function LoginBox() {
  return (
    <Grid item>
      <Paper elevation={3}>
        <Typography variant="h6" style={{ paddingTop: "20px" }}>
          Login
        </Typography>
        <LoginForm />
      </Paper>
    </Grid>
  );
}

export default LoginBox;
