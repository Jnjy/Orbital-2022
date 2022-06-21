import { Grid } from "@mui/material";
import CommCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import styles from "./CommunityPage.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getCommunityInfo, queryCommunity } from "../../hooks/useDB.js";

function CommunityPage(props) {
  const [commList, setCommList] = useState([]);
  const [allCommInfo, setAllCommInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      //Putting a placeholder here until adding user to community is setup
      //queryCommunity(user.uid).then((res) => {
      queryCommunity("e9iLoiJsNUTd0mGvBUKAjexLHOl1").then((res) => {
        setCommList(res);
        setIsLoading(true);
      });
    }
  }, [user]);

  useEffect(() => {
    let comms = [];
    commList.forEach((r) => {
      getCommunityInfo(r).then((res) => {
        comms.push(res);
        console.log(comms.length);
        setAllCommInfo(comms);
      });
    });
    setIsLoading(false);
  }, [commList]);

  return (
    <Layout pageName="Community">
      <div>{commList}</div>
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
        {allCommInfo.map(({ name, shortDesc }) => (
          <CommCard title={name} desc={shortDesc} />
        ))}
        {/* {console.log(allCommInfo[0])} */}
        <CommCard
          title="Placeholder 1"
          desc="This is a short description of community 1"
        />
      </Grid>
    </Layout>
  );
}

export default CommunityPage;
