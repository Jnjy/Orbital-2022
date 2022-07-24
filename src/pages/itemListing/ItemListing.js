import Layout from "../../components/layout/Layout.js";
import styles from "./itemListing.module.css";
import { useEffect, useState } from "react";
import ActionButton from "./components/ActionButton";
import { getAllUserItem } from "../../hooks/useDB.js";
import { useAuth } from "../../hooks/useAuth.js";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@mui/material";

function ItemListing() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { user } = useAuth();
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const removeItem = (iid) => {
    let tmp = [];
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i][0] !== iid) {
        tmp = [...tmp, itemList[i]];
      }
      console.log(tmp);
    }
    setItemList(tmp);
  };

  useEffect(() => {
    if (user) {
      //console.log(user);
      getAllUserItem(user.uid).then((r) => {
        //console.log(r);
        let e = r.map((d) => {
          //console.log(d.id);
          return [d.id, d.data()];
        });
        console.log(e);
        setItemList(e);
        setIsLoading(false);
      });
    }
  }, [user]);

  return (
    <Layout pageName="Item Listing">
      <br />
      <Paper elevation={3} sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ padding: "10px", maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Community</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading ? (
                itemList.map((e) => (
                  /* e[1] is data, e[0] is the id */
                  <TableRow key={e[0]} hover>
                    <TableCell>{e[1].itemName}</TableCell>
                    <TableCell>PlaceHolder</TableCell>
                    <TableCell>{e[1].itemPrice}</TableCell>
                    <TableCell>{e[1].itemCond}</TableCell>
                    <TableCell>
                      <ActionButton item={e} rm={removeItem} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow hover>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              )}
            </TableBody>
            {/* <TableRow hover>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
                <TableCell>
                  <ActionButton />
                </TableCell>
              </TableRow>
            </TableBody> */}
          </Table>
        </TableContainer>
      </Paper>
    </Layout>
  );
}

export default ItemListing;
