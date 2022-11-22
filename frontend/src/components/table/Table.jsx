import './table.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({data}) => {
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Screenshot</TableCell>
            <TableCell className="tableCell">Test Suit Title</TableCell>
            <TableCell className="tableCell">Number of Cases</TableCell>
            <TableCell className="tableCell">Date Issued</TableCell>
            <TableCell className="tableCell">Parent Suits</TableCell>
            <TableCell className="tableCell">Edit Suit</TableCell>
            <TableCell className="tableCell">View Test Cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={item.thumbnail} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{item.name}</TableCell>
              <TableCell className="tableCell">{item.count}</TableCell>
              <TableCell className="tableCell">{item.date_issued}</TableCell>
              <TableCell className="tableCell">{item.parent}</TableCell>
              <TableCell className="tableCell"><button>Edit</button></TableCell>
              <TableCell className="tableCell"><Link to={`suits/suit/${item.id}`}>View</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default List;