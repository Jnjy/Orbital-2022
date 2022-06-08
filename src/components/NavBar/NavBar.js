import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COMMFLEA
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 16 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
              
              color="inherit"
            >
              <Tooltip title="Open settings">
              <IconButton onClick={() => console.log("menu")} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            </IconButton>
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
