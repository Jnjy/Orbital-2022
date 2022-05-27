import {Avatar, Card, CardHeader, Grid} from '@mui/material'
import { maxWidth } from '@mui/system'
import React from 'react'

function UserProfile() {
  return (
    <Grid container
    spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <Avatar />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserProfile