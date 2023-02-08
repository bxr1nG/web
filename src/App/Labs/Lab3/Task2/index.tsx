import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

interface Data {
    name: string;
    price: number;
    inStock: number;
}

function createData(name: string, price: number, inStock: number): Data {
    return {
        name,
        price,
        inStock
    };
}

const rows = [
    createData("Butter", 0.9, 99),
    createData("Cheese", 4.9, 20),
    createData("Fancy French Cheese", 99, 12),
    createData("Heavy Cream", 3.9, 9),
    createData("Milk", 1.9, 32),
    createData("Soul Cream", 2.9, 86),
    createData("Yoghurt", 2.4, 12),
    createData("Pizza", 0.01, 0),
    createData("Borstch", 99999, 1)
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof Data>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: "name",
        numeric: false,
        label: "Name"
    },
    {
        id: "price",
        numeric: true,
        label: "Price"
    },
    {
        id: "inStock",
        numeric: true,
        label: "In Stock"
    }
];

interface EnhancedTableProps {
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell>Index</TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box
                                    component="span"
                                    sx={visuallyHidden}
                                >
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("name");

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    return (
        <Box
            sx={{
                padding: "2rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Paper
                sx={{
                    overflow: "hidden",
                    maxWidth: "900px",
                    width: "100%"
                }}
            >
                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {rows
                                .sort(getComparator(order, orderBy))
                                .slice()
                                .map((row, index) => (
                                    <TableRow
                                        hover
                                        key={row.name}
                                        sx={{
                                            backgroundColor:
                                                row.inStock < 3
                                                    ? row.inStock === 0
                                                        ? "#faa"
                                                        : "#ffa"
                                                    : "transparent"
                                        }}
                                    >
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell align="left">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            ${row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.inStock}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default Task;
