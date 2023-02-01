import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { data } from "./constants";

type TaskProps = Record<string, unknown>;

const Task: React.FC<TaskProps> = () => {
    return (
        <Paper
            sx={{
                margin: "1.5rem"
            }}
        >
            <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>stock_name</TableCell>
                        <TableCell align="right">company_name</TableCell>
                        <TableCell align="right">price</TableCell>
                        <TableCell align="right">currency</TableCell>
                        <TableCell align="right">change</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.stock_name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                            >
                                {row.stock_name}
                            </TableCell>
                            <TableCell align="right">
                                {row.company_name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.currency}</TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    color: +row.change > 0 ? "green" : "red"
                                }}
                            >
                                {row.change}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default Task;
