import { useState, useEffect } from 'react';
import './App.css';
import Papa from 'papaparse';
import axios from 'axios';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("DataCopy.csv");
        const csvText = response.data;
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setData(results.data); 
          },
        });
      } catch (error) {
        console.error("Error fetching the CSV file:", error);
      }
    };

    fetchData();
  }, []);

  return (
  <>
    <CssBaseline />
    <div className='container'>
    <Navbar data={data}/>
    {/* <Dashboard data={data} /> */}
    </div>
    <Footer />
  </>
);

}

export default App;
