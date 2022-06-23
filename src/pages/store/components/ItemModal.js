import { Button, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ItemForm from "./ItemForm";

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

function ItemModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ai = props.ai;
  const cid = props.cid;

  return (
    <div>
      <Button onClick={handleOpen}>Add a new item</Button>
      <Modal open={open} onClose={handleClose} closetimeoutms={1000}>
        <Box sx={modalStyle}>
          <Stack spacing={2}>
            <Typography variant="h6">Post an item</Typography>
            <ItemForm handleClose={handleClose} addI={ai} cid={cid} />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default ItemModal;
