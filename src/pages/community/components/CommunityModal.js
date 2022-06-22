import { Button, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CommunityForm from "./CommunityForm";

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

function CommunityModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ac = props.ac;

  return (
    <div>
      <Button onClick={handleOpen}>Add a new community</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Stack spacing={2}>
            <Typography variant="h6">Post an item</Typography>
            <CommunityForm handleClose={handleClose} addC={ac} />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default CommunityModal;
