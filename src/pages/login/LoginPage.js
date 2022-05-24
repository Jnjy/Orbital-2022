import { Grid, Typography } from '@mui/material'
import React from 'react'
import LoginForm from './components/LoginForm';

const paperStyles = {
  padding:20,
  height:'50vh',
  width:400, 
  margin:"40px auto"
}

const titleStyle = {
  color:"#11AC0E",
  fontWeight: 'bold',
}

function LoginPage() {
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
            <LoginForm />
      </Grid>
    </Grid>
  );
}

export default LoginPage