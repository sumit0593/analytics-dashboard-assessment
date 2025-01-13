import React from "react";
import { Box } from "@mui/material";
import Charts from "./Charts";
import DataTable from "./DataTable"

const Dashboard = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Charts data={data} />
      <DataTable data={data}/>
    </Box>
  );
};

export default Dashboard;
