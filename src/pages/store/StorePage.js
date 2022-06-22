import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCards/ItemCards";
import Layout from "../../components/layout/Layout.js";
import ItemModal from "./components/ItemModal";
import styles from "./StorePage.module.css";

function StorePage(props) {
  const {commId} = useParams();

  return (
    <Layout pageName="Store">
      <div>
        {commId}
      </div>
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
        <ItemCard title="Item 1" desc="Item 1 Description" />
        <ItemCard title="Item 2" desc="Item 2 Description" />
        <ItemCard title="Item 3" desc="Item 3 Description" />
        <ItemCard title="Item 4" desc="Item 4 Description" />
        <ItemCard title="Item 5" desc="Item 5 Description" />
        <ItemCard title="Item 6" desc="Item 6 Description" />
      </Grid>
    </Layout>
  );
}

export default StorePage;
