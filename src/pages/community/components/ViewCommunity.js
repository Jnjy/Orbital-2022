import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import styles from "../CommunityPage.module.css";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
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
}

function ViewCommunity(props) {
    const [ open, setOpen ] = useState(false);

    const handleView = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <>
            <Button size="small" onClick={handleView}>Learn More</Button>
            <Modal open={open} onClose={handleClose} closetimeoutms={1000}>
                <Box sx={modalStyle}>
                    <Stack spacing={2}>
                        <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                            <CloseIcon onClick={handleClose}/>
                        </Box>
                        <Box sx={infoBox}>
                            <Stack spacing={2}>
                                <Typography variant="h5">{props.props.title}</Typography>
                                <img 
                                className={styles.image}
                                src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
                                alt="placeholder"/>
                                <Typography variant="p">
                                    <span>
                                        <b>
                                            Description:
                                        </b>
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

export default ViewCommunity;