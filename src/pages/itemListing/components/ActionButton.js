import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

function ActionButton() {
    const [anchorEl, setAnchorEl] = useState(null);

    const open=Boolean(anchorEl);

    const handleOpenMenu = event => setAnchorEl(event.currentTarget);
    
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton
            id="action-button"
            aria-controls={open ? 'action-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpenMenu}>
                <MoreVertIcon />
            </IconButton>
            <Menu
            id="action-menu"
            MenuListProps={{
                'aria-labelledby': 'action-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            >
                <MenuItem>
                    <Typography>
                        View
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography color="error">
                        Delete
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default ActionButton;