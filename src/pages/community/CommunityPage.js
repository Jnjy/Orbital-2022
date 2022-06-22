import { Grid } from "@mui/material";
import CommCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import styles from "./CommunityPage.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getCommunityInfo, queryCommunity } from "../../hooks/useDB.js";
import CommunityModal from "./components/CommunityModal.js";

function CommunityPage(props) {
  const [commList, setCommList] = useState([]);
  const [allCommInfo, setAllCommInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      //Putting a placeholder here until adding user to community is setup
      //queryCommunity(user.uid).then((res) => {
      queryCommunity(user.uid).then((res) => {
        setCommList(res);
        setIsLoading(true);
      });
    }
  }, [user]);

  useEffect(() => {
    var promises = commList.map((cid) =>
      getCommunityInfo(cid).then((r) => [cid, r])
    );
    Promise.all(promises).then((r) => {
      console.log(r);
      setAllCommInfo(r);
    });
  }, [commList]);

  return (
    <Layout pageName="Community">
      <div>{commList}</div>
      <CommunityModal uid={user} />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={styles.commList}
      >
        {/* add search and filter bar
        to be replaced by mapping from db*/}
        {isLoading ? (
          allCommInfo.map((elem) => (
            <CommCard
              title={elem[1].name}
              desc={elem[1].shortDesc}
              commId={elem[0]}
              key={elem[0]}
            />
          ))
        ) : (
          <div>Loading!</div>
        )}

        <CommCard
          title="Placeholder 1"
          desc="This is a short description of community 1"
        />
      </Grid>
    </Layout>
  );
}

export default CommunityPage;
