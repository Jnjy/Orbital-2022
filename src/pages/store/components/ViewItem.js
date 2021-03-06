import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../StorePage.module.css";

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

const infoBox = {
  mb: 2,
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  overflow: "hidden",
  overflowY: "scroll",
};

function ViewItem(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    //console.log(props.props.imgUrl);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button size="small" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal open={open} onClose={handleClose} closetimeoutms={1000}>
        <Box sx={modalStyle}>
          <Stack spacing={2}>
            <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <CloseIcon onClick={handleClose} />
            </Box>
            <Box sx={infoBox}>
              <Stack spacing={2}>
                <Typography variant="h5">{props.props.title}</Typography>
                <img
                  className={styles.image}
                  src={props.props.imgUrl}
                  alt={props.props.title}
                />
                <Typography variant="p">
                  <span>
                    <b>Price: </b>
                  </span>
                  $xx.xx
                </Typography>
                <Typography variant="p">
                  <span>
                    <b>Condition: </b>
                  </span>
                  5/10
                </Typography>
                <Typography variant="p">
                  <span>
                    <b>Description:</b>
                  </span>
                  <br />
                  {props.props.desc}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default ViewItem;
