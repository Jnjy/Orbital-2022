import React from "react";
import { Grid } from "@mui/material";
import SignUpHeader from "./components/SignUpHeader";
import SignUpBox from "./components/SignUpBox";

function SignUpPage() {
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
      <SignUpHeader />
      <SignUpBox />
    </Grid>
  );
}

export default SignUpPage;
