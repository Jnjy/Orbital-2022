import { Grid, Typography } from '@mui/material'
import React from 'react'

const titleStyle = {
    color: '#11AC0E',
    marginBottom: '20px',
    fontWeight: 'bold'
  }
  
  const subtitleStyle = {
    marginBottom: '30px',
    fontWeight: 'bold'
  }

function LoginHeader() {
  return (
    <Grid item>
          <Typography variant='h3' style={titleStyle}>CommFlea</Typography>
          <Typography variant='h5' style={subtitleStyle}>Purchase made easier within community</Typography>
    </Grid>
  )
}

export default LoginHeader