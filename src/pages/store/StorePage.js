import { Grid } from "@mui/material";
import ItemCard from "../../components/ItemCards/ItemCards";
import Layout from "../../components/layout/Layout.js";
import ItemModal from "./components/ItemModal";
import styles from "./StorePage.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getItemInfo, queryItems } from "../../hooks/useDB.js";

function StorePage(props) {
  //state of selected community should be at this.props.location.state.commID (or equivalent)
  //This is a placeholder for "Sheares hall"
  const selectedComm = "7vpSMNq4nJRtzPvRoQQM";
  const [itemsList, setItemsList] = useState([]);
  const [allItemInfo, setAllItemInfo] = useState([]);

  useEffect(() => {
    if (selectedComm) {
      //Putting a placeholder here until adding user to community is setup
      //queryCommunity(user.uid).then((res) => {
      queryItems(selectedComm).then((res) => {
        setItemsList(res);
        console.log(res);
        //setIsLoading(true);
      });
    }
  }, [selectedComm]);

  useEffect(() => {
    let items = [];
    itemsList.forEach((r) => {
      getItemInfo(r).then((res) => {
        items.push(res);
        setAllItemInfo(items);
      });
    });
    //setIsLoading(false);
  }, [itemsList]);

  return (
    <Layout pageName="Store">
      <ItemModal />
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
        {allItemInfo.map(({ name, price }) => (
          <ItemCard title={name} desc={price} key={name} />
        ))}
        <ItemCard title="Placeholder 1" desc="P 1 Description" />
      </Grid>
    </Layout>
  );
}

export default StorePage;
