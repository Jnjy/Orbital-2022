import { Box, Button, MenuItem, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import styles from "../itemListing.module.css";
import { getImageURL } from "../../../hooks/useStorage";

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
}

function ViewItem(props) {
    const { item } = props;
    const [open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.log(item);
    }
    const handleClose = () => setOpen(false);

    const getImage = async (path) => {
        const imageURL = await getImageURL(path);
        console.log(imageURL);
        return imageURL;
    }

    return (
        <>
            <MenuItem size="small" onClick={handleOpen}>View</MenuItem>
            <Modal open={open} onClose={handleClose} closetimeoutms={1000}>
                <Box sx={modalStyle}>
                    <Stack spacing={2}>
                        <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
                            <CloseIcon onClick={handleClose}/>
                        </Box>
                        <Box sx={infoBox}>
                            <Stack spacing={2}>
                                <Typography variant="h5">{item[1].itemName}</Typography>
                                <img 
                                className={styles.image}
                                src={getImage(item[1].image)}
                                alt={item[1].itemName}/>
                                <Typography variant="p">
                                    <span>
                                        <b>Price: {" "}</b>
                                    </span>$xx.xx
                                </Typography>
                                <Typography variant="p">
                                    <span>
                                        <b>Condition: {" "}</b>
                                    </span>5/10
                                </Typography>
                                <Typography variant="p">
                                    <span>
                                        <b>
                                            Description:
                                        </b>
                                    </span>
                                    <br />
                                    {item[1].itemDesc}
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default ViewItem;