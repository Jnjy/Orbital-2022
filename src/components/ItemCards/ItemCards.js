import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ItemCards.module.css";
import { Grid } from "@mui/material";
import ViewItem from "../../pages/store/components/ViewItem";
import emailjs from '@emailjs/browser';

export default function MediaCard(props) {

  const sendReqMail = (values) => {
    console.log(values.receiver);
    console.log(props.owner);
    /* emailjs.send('service_4dmbshm', 'template_roili0o', values, '0cfS7-ifOcQSycHp1')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });*/ 
  }

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
            //src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
            src={props.imgUrl}
            alt="placeholder"
          />
          <Typography variant="body3" color="text.secondary">
            <span>
              <b>Price: $ {props.price}</b>
            </span>
          </Typography>
          <span className={styles.itemDesc}>
            <Typography variant="body3" color="text.secondary">
              {props.desc}
            </Typography>
          </span>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            onClick={() => sendReqMail({"receiver": 'commflea@gmail.com'})}
          >
            Request
          </Button>
          <ViewItem props={props} />
        </CardActions>
      </Card>
    </Grid>
  );
}
