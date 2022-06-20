import { Button, Modal, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

function ItemModal() {
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add a new item</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Stack spacing={2}>
            <Typography variant="h6">Title</Typography>
            <Typography variant="h6">Form</Typography>
            <Stack direction="row-reverse">
              <Button color='error'>Cancel</Button>
              <Button>Add</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default ItemModal