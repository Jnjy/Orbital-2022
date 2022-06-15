import { Grid } from "@mui/material";
import MediaCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import styles from "./CommunityPage.module.css";

function CommunityPage(props) {
  return (
    <Layout pageName="Community">
      <Grid 
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      className={styles.commList}>

        {/* add search and filter bar
        to be replaced by mapping from db*/}
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
      </Grid>
      {/*<div className={classes.contentmain}>
        <div className={classes.card}>
          <MediaCard
            title="Community 1"
            desc="This is a short description of community 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Community 2"
            desc="This is a short description of community 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Community 3"
            desc="This is a short description of community 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Community 4"
            desc="This is a short description of community 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Community 5"
            desc="This is a short description of community 1"
          />
        </div>
    </div>*/}
    </Layout>
  );
}

export default CommunityPage;
