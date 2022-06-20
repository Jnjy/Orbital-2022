import {
  Badge,
  Box,
  Container,
  Grid,
  Item,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styles from "../UserProfile.module.css";
import Avatar from "@mui/material/Avatar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";

function UserInformation() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item md={4}>
      <Paper elevation={3}>
        <Grid
          container
          direction="column"
          spacing={2}
          className={styles.informationGrid}
        >
          <Grid item>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Avatar
                  alt="Remy Sharp"
                  src="https://play-lh.googleusercontent.com/GkhngtFrSb3G9WXkWxJ9IRppbGVbNy7b_xyqa12Xa-Y3My_SXtsLamI5kR6or5zWGA"
                  onClick={() => console.log("clicked")}
                />
              }
            >
              <Avatar
                alt="Profile Picture"
                src="https://helios-i.mashable.com/imagery/articles/04i1KeWXNed98aQakEZjeOs/hero-image.fill.size_1248x702.v1623362896.jpg"
                sx={{ width: 150, height: 150 }}
              />
            </Badge>
          </Grid>
          <Grid item>
            <Typography variant="h4">Name</Typography>
            <Typography variant="caption">Joined since DD/MM/YY</Typography>
          </Grid>
          <Grid item>
            <Stack spacing={2}>
              <Typography variant="p">Email: commflea@mail.com</Typography>
              <Typography variant="p">Phone No: 12345678</Typography>
              <Typography variant="p">Telegram Handle: @commflea</Typography>
            </Stack>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default UserInformation;
