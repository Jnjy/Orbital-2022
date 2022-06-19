import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import UserInformation from './components/UserInformation'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react';
import UserUtil from './components/UserUtil'

function UserProfile() {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <Box 
        sx={{ 
          padding: '40px', justifyContent: "center", 
        display: { xs: 'none', md: 'flex' } }}>
          <Grid 
          container 
          direction="row" 
          justifyContent="center" 
          alignItems="center" 
          spacing={2}
          minHeight="90vh">
            {/* User information section */}
            <UserInformation />
      
            {/* Edit Section */}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default UserProfile;