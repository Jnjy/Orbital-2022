import { Button, Grid } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCards/ItemCards";
import Layout from "../../components/layout/Layout.js";
import ItemModal from "./components/ItemModal";
import styles from "./StorePage.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getItemInfo, queryItems } from "../../hooks/useDB.js";

function StorePage(props) {
  const [itemsList, setItemsList] = useState([]);
  const [allItemInfo, setAllItemInfo] = useState([]);
  const location = useLocation();
  const selectedComm = location.state.commId;
  useEffect(() => {
    if (selectedComm) {
      queryItems(selectedComm).then((res) => {
        setItemsList(res);
      });
    }
  }, [selectedComm]);

  // useEffect(() => {
  //   let items = [];
  //   itemsList.forEach((r) => {
  //     getItemInfo(r).then((res) => {
  //       items.push(res);
  //       setAllItemInfo(items);
  //     });
  //   });
  // }, [itemsList]);

  useEffect(() => {
    var promises = itemsList.map((iid) =>
      getItemInfo(iid).then((res) => [iid, res])
    );
    Promise.all(promises).then((res) => {
      console.log(res);
      setAllItemInfo(res);
    });
  }, [itemsList]);

  return (
    <Layout pageName="Store">
      <ItemModal />
      <Button onClick={() => console.log(location.state.commId)}>CLICK</Button>
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
          <ItemCard title={elem[1].name} desc={elem[1].price} key={elem[0]} />
        ))}
        <ItemCard title="Placeholder 1" desc="P 1 Description" />
      </Grid>
    </Layout>
  );
}

export default StorePage;
