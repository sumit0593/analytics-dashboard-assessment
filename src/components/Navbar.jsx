import React, { useState, Suspense, lazy } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const DataTable = lazy(() => import("./DataTable"));
const Charts = lazy(() => import("./Charts"));
const Dashboard = lazy(() => import("./Dashboard")); 

const navItems = ["Overview", "Charts", "Reports"];

const Navbar = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState("Overview");
  const [isResport,setIsReport]=useState(false);

  const handleNavItemClick = (item) => {
    setSelectedItem(item);
    if(item==='Reports'){
        setIsReport(true)
    }
  };

  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            style={{ textAlign: "left", fontSize: "26px" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EV Dashboard - {selectedItem}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 10, p: 3 }}>
        <Suspense fallback={<div>Loading...</div>}>
          {selectedItem === "Overview" && <Dashboard data={data} />}
          {selectedItem === "Charts" && <Charts data={data} />}
          {selectedItem === "Reports" && <DataTable data={data} isSelected={isResport}/>}
        </Suspense>
      </Box>
    </div>
  );
};

export default Navbar;
