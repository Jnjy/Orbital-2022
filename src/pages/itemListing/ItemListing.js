import Layout from "../../components/layout/Layout.js";
import styles from "./itemListing.module.css";
import {useState} from 'react';
import ActionButton from "./components/ActionButton";

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
    TableFooter
 } from  "@mui/material";

function ItemListing() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Layout pageName="Item Listing">
            <br />
            <Paper elevation={3} sx={{width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ padding: '10px', maxHeight: 440 }}>
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
                            <TableRow hover>
                                <TableCell>test</TableCell>
                                <TableCell>test</TableCell>
                                <TableCell>test</TableCell>
                                <TableCell>test</TableCell>
                                <TableCell>
                                    <ActionButton />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Layout>
    )
}

export default ItemListing;
