import React, { useEffect, useState } from "react";
import { fetchData } from "../service/api";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);
  const FetchData = async () => {
    const response = await fetchData();
    console.log(response.data);
    if (response.status === 200) {
      setData(response.data);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ width: "96%", margin: "auto",}}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{fontWeight:"bold"}}>Name</TableCell>
              <TableCell align="center"sx={{fontWeight:"bold"}}>User Name</TableCell>
              <TableCell align="center"sx={{fontWeight:"bold"}}>Email</TableCell>
              <TableCell align="center"sx={{fontWeight:"bold"}}>Phone No</TableCell>
              <TableCell align="center"sx={{fontWeight:"bold"}}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: index % 2 === 0 ? "white" : "#E2DFD2",
                }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.address.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
