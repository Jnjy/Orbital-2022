import MediaCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import classes from "./CommunityPage.module.css";

function CommunityPage() {
  return (
    <Layout>
      <div className={classes.contentmain}>
        <MediaCard
          title="Community 1"
          desc="This is a short description of community 1"
        />
      </div>
    </Layout>
  );
}

export default CommunityPage;
