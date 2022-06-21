import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ItemCards.module.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MediaCard(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/store");
  };

  return (
    <Grid container justifyContent="center" item sm={6} md={4} xl={3}>
      <Card
        sx={{
          ":hover": {
            boxShadow: 20,
          },
          maxWidth: 380,
        }}
      >
        {/* <CardMedia
          component="img"
          height="140"
          image="market-unsplash.jpg"
          alt="Community 1"
        /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="bold"
            component="div"
          >
            {props.title}
          </Typography>
          <img
            className={styles.postImg}
            src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
            alt="placeholder"
          />
          <Typography variant="body3" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            onClick={() => console.log("do something")}
          >
            Request
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
