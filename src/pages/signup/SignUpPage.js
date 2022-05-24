import React from 'react'
import SignUpForm from './components/SignUpForm'
import { Grid, Typography } from '@mui/material'

const titleStyle = {
    color:"#11AC0E",
    fontWeight: 'bold',
}

function SignUpPage() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      spacing={5}
      // need to think of a way to center the box instead of using padding(hard-coded)
      style={{
        paddingTop: '100px'
      }}
    >
      <Grid item>
          <Typography style={titleStyle} variant='h3'>CommFlea</Typography>
          <Typography variant='h5'>Purchase made easier within community</Typography>
      </Grid>
      <Grid item>
            <Typography variant='h6'>Login</Typography>
            <SignUpForm />
      </Grid>
    </Grid>
  );
}

export default SignUpPage