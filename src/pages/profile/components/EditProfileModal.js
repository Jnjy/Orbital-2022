import { Button, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

function ProfileModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log(props);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Edit Profile
      </Button>
      <Modal open={open} onClose={handleClose} closetimeoutms={1000}>
        <Box sx={modalStyle}>
          <Stack spacing={2}>
            <Typography variant="h5">Edit Profile</Typography>
            <br />
            <EditProfileForm props={props} hc={handleClose} />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileModal;
