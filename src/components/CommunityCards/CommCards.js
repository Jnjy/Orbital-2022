import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./CommCards.module.css"

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="market-unsplash.jpg"
        alt="Community 1"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
          {props.title}
        </Typography>
        <img className={styles.postImg} src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png" alt='placeholder'/>
        <Typography variant="body3" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Enter</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
