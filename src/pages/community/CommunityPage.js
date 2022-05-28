import MediaCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import classes from "./CommunityPage.module.css";

function CommunityPage() {
  return (
    <Layout>
      <div className={classes.contentmain}>
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
      </div>
    </Layout>
  );
}

export default CommunityPage;
