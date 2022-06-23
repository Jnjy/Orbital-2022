import { Grid } from "@mui/material";
import CommCard from "../../components/CommunityCards/CommCards.js";
import Layout from "../../components/layout/Layout.js";
import styles from "./CommunityPage.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getAllCommunity, getCommunityInfo } from "../../hooks/useDB.js";
import CommunityModal from "./components/CommunityModal.js";
import { getImageURL } from "../../hooks/useStorage.js";

function CommunityPage(props) {
  const [commList, setCommList] = useState([]);
  const [allCommInfo, setAllCommInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  const addComm = (cid) => {
    let curr = commList;
    curr = [...curr, cid];
    setCommList(curr);
  };

  useEffect(() => {
    if (user) {
      getAllCommunity().then((res) => {
        //console.log(res);
        setCommList(res);
        setIsLoading(true);
      });
    }
  }, [user]);

  useEffect(() => {
    const promises = commList.map((cid) =>
      getCommunityInfo(cid).then((r) => [cid, r, getImageURL(r.image)])
    );
    Promise.all(promises).then((r) => {
      setAllCommInfo(r);
    });
  }, [commList]);

  return (
    <Layout pageName="Community">
      <CommunityModal uid={user} ac={addComm} />
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
              imgUrl={
                //"https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
                elem[2]
              }
            />
          ))
        ) : (
          <div>Loading!</div>
        )}
        <CommCard
          title="Placeholder 1"
          desc="Placeholder"
          imgUrl={
            "https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
          }
        />
      </Grid>
    </Layout>
  );
}

export default CommunityPage;
