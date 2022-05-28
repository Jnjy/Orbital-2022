import { Grid } from "@mui/material";
import React from "react";
import LoginBox from "./components/LoginBox";
import LoginHeader from "./components/LoginHeader";

function LoginPage() {
  return (
    <Grid
      container
      style={{
        height: "100vh",
      }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <LoginHeader />
      <LoginBox />
    </Grid>
  );
}

export default LoginPage;
