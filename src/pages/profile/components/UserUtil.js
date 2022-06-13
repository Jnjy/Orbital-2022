import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react';

function UserUtil() {
    const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Grid container item md={8}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Util Section"
                >
                    <Tab value="Edit Profile" label="Edit Profile" />
                    <Tab value="Item Listing" label="Item Listing" />
                    <Tab value="Service Listing" label="Service Listing" />
                </Tabs>
            </Box>
        </Grid>
    );
}

export default UserUtil;