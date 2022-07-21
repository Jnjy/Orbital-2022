import { Button, Grid } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCards/ItemCards";
import Layout from "../../components/layout/Layout.js";
import ItemModal from "./components/ItemModal";
import styles from "./StorePage.module.css";
import { useState, useEffect } from "react";
import { getItemInfo, queryItems } from "../../hooks/useDB.js";
import { getImageURL } from "../../hooks/useStorage";

function StorePage(props) {
  const [itemsList, setItemsList] = useState([]);
  const [allItemInfo, setAllItemInfo] = useState([]);
  const [imgLoaded, setImgLoaded] = useState([]);
  const location = useLocation();
  const selectedComm = location.state.commId;
  const selectedCommName = location.state.name;

  const addItem = (iid) => {
    let curr = itemsList;
    curr = [...curr, iid];
    setItemsList(curr);
  };

  useEffect(() => {
    if (selectedComm) {
      queryItems(selectedComm).then((res) => {
        setItemsList(res);
      });
    }
  }, [selectedComm]);

  useEffect(() => {
    var promises = itemsList.map((iid) =>
      getItemInfo(iid).then((res) => [iid, res, getImageURL(res.image)])
    );
    Promise.all(promises).then((res) => {
      //console.log(res);
      Promise.all(promises).then((r) => {
        let tmp = [];
        for (let i = 0; i < r.length; i++) {
          tmp[i] = r[i][2];
        }
        Promise.all(tmp).then((res) => {
          console.log(res);
          for (let j = 0; j < r.length; j++) {
            r[j][2] = res[j];
          }
          setImgLoaded(r);
        });
      });
    });
  }, [itemsList]);

  useEffect(() => {
    setAllItemInfo(imgLoaded);
  }, [imgLoaded]);

  return (
    <Layout pageName={"Store - " + selectedCommName}>
      <br />
      <ItemModal ai={addItem} cid={selectedComm} />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={styles.itemList}
      >
        {/* add search and filter bar
        to be replaced by mapping from db*/}
        {allItemInfo.map((elem) => (
          <ItemCard
            title={elem[1].itemName}
            desc={elem[1].itemDesc}
            price={elem[1].itemPrice}
            owner={elem[1].ownerID}
            key={elem[0]}
            imgUrl={
              //"https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
              elem[2]
                ? elem[2]
                : "https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
            }
          />
        ))}
        <ItemCard
          title="Not in DB Placeholder"
          desc="This placeholder is permenantly here"
          imgUrl={
            "https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png"
          }
          price="999999.99"
        />
      </Grid>
    </Layout>
  );
}

export default StorePage;
