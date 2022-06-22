import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function MobileView() {
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
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="menu-phone"
          aria-controls="menu-phoneappbar"
          aria-haspopup="true"
          onClick={handleOpenMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-phoneappbar"
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
          <MenuItem onClick={() => console.log("chat")}>Chat</MenuItem>
          <MenuItem onClick={() => console.log("notifications")}>
            Notifications
          </MenuItem>
          <MenuItem onClick={handleLogOut}>Log out</MenuItem>
        </Menu>
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          marginRight: "36px",
          justifyContent: "center",
          display: { xs: "flex", md: "none" },
          color: "inherit",
          textDecoration: "none",
        }}
      >
        COMMFLEA
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
    </>
  );
}

export default MobileView;
