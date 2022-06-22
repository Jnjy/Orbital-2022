import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../NavBar.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import NotificationsIcon from "@mui/icons-material/Notifications";

function DesktopView() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const { signout } = useAuth();

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfileNavigation = () => {
    navigate("/profile");
  };

  const handleLogOut = async () => {
    await signout()
      .then((res) => navigate("/login"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/community"
        sx={{
          flexGrow: 0,
          display: { xs: "none", md: "flex" },
          color: "inherit",
          textDecoration: "none",
        }}
      >
        COMMFLEA
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMenu}
        >
          <Avatar />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleProfileNavigation}>Profile</MenuItem>
          <MenuItem onClick={handleLogOut}>Log out</MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default DesktopView;
