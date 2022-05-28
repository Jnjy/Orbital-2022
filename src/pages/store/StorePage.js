import MediaCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import classes from "./StorePage.module.css";

function StorePage(props) {
  return (
    <Layout pageName="Store">
      <div className={classes.contentmain}>
        <div className={classes.card}>
          <MediaCard
            title="Item 1"
            desc="This is a short description of item 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Item 2"
            desc="This is a short description of item 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Item 3"
            desc="This is a short description of item 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Item 4"
            desc="This is a short description of item 1"
          />
        </div>
        <div className={classes.card}>
          <MediaCard
            title="Item 5"
            desc="This is a short description of item 1"
          />
        </div>
      </div>
    </Layout>
  );
}

export default StorePage;
