import React from 'react'
import SignUpForm from './components/SignUpForm'
import { Grid, Paper, Typography } from '@mui/material'

const titleStyle = {
    color:"#11AC0E",
    fontWeight: 'bold',
    marginBottom: '20px'
}

const subtitleStyle = {
  fontWeight: 'bold',
  marginBottom: '30px'
}

function SignUpPage() {
  return (
    <Grid
      container
      style={{
        height: '100vh'
      }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
          <Typography variant='h3' style={titleStyle}>CommFlea</Typography>
          <Typography variant='h5' style={subtitleStyle}>Purchase made easier within community</Typography>
      </Grid>
      <Grid item>
        <Paper elevation={3}>
          <Typography variant='h6' style={{paddingTop: '20px'}}>Sign Up</Typography>
          <SignUpForm />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SignUpPage