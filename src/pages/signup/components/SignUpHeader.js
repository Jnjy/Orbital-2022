import { Grid, Typography } from '@mui/material'
import React from 'react'

const titleStyle = {
  color: '#11AC0E',
  marginBottom: '20px'
}

const subtitleStyle = {
  marginBottom: '30px'
}

function SignUpHeader() {
  return (
    <Grid item>
        <Typography variant='h3' fontWeight="fontWeightBold" style={titleStyle}>CommFlea</Typography>
        <Typography variant='h5' fontWeight="fontWeightBold" style={subtitleStyle}>Purchase made easier within community</Typography>
    </Grid>
  )
}

export default SignUpHeader