import { Badge, Grid, Paper, Stack, Typography } from "@mui/material";
import styles from "../UserProfile.module.css";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/FirebaseConfig";
import moment from "moment";

function UserInformation() {
  const { user } = useAuth();
  const [name, setName] = useState("Loading name...");
  const [profile, setProfile] = useState("blank profile");
  const [pemail, setEmail] = useState("placeholder@gmail.com");
  const [phone, setPhone] = useState("+65 XXXX XXXX");
  const [jdate, setJdate] = useState("DD/MM/YYYY");

  const getUser = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setProfile(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (user?.displayName) {
      setName(user.displayName);
    }
    if (user) {
      getUser(user.uid);
      console.log(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (profile) {
      setEmail(profile.email);
      setName(profile.name);
      //creation time in epoch date, need to parse properly
      console.log(profile.creationTime);
      //Converts string to int
      const date = moment(parseInt(profile.creationTime)).format("DD-MM-YYYY");
      console.log(date);
      setJdate(date);
      setPhone(profile.phone);
    }
  }, [profile]);

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
                alt={"Profile Picture"}
                src="https://helios-i.mashable.com/imagery/articles/04i1KeWXNed98aQakEZjeOs/hero-image.fill.size_1248x702.v1623362896.jpg"
                sx={{ width: 150, height: 150 }}
              />
            </Badge>
          </Grid>
          <Grid item>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="caption">Joined since {jdate}</Typography>
          </Grid>
          <Grid item>
            <Stack spacing={2}>
              <Typography variant="p">{pemail}</Typography>
              <Typography variant="p">Phone No: {phone}</Typography>
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
