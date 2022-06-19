import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import styles from "./NavBar.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import DesktopView from './views/DesktopView';
import MobileView from './views/MobileView';

function NavBar() {
  const navigate = useNavigate();

  const { signout } = useAuth();

  const handleProfileNavigation = () => {
    navigate("/profile")
  }

  const handleLogOut = async () => {
    await signout()
    .then(res => navigate("/login"))
    .catch(error => console.log(error));
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopView />
          <MobileView />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
