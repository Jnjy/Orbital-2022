import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import styles from "./NavBar.module.css"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

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
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COMMFLEA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 16 new notifications"
              aria-haspopup="true"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <ChatBubbleIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
            >
              <Tooltip title="Profile">
                <IconButton onClick={() => navigate('/profile')} sx={{ p: 0 }}>
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
