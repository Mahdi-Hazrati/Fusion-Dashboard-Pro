import React from "react";
import {Table, TableBody, TableCell, TableHead, TableContainer, TableRow, Paper} from "@mui/material"
import {rows} from "./dummy-data"
import "./table.scss"

const UsersTable = ()=>{
    return (
        <TableContainer component={Paper} className="transactionTable" style={{backgroundColor:"transparent"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" >Tracking ID</TableCell>
            <TableCell className="tableCell" >Product</TableCell>
            <TableCell className="tableCell" >Custumer</TableCell>
            <TableCell className="tableCell" >Date</TableCell>
            <TableCell className="tableCell" >Amount</TableCell>
            <TableCell className="tableCell" >Payment Method</TableCell>
            <TableCell className="tableCell" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt={`${row.product}'`} />
                    {row.product}
                </div>
                </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default UsersTable