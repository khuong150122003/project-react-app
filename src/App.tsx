import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import { Box, Container, Stack } from '@mui/material';
import Dashboard from './components/Layout/Dashboard';
import Courses from './components/Layout/Courses';
import { Route, Routes } from 'react-router-dom';
import Coaching from './components/Layout/Coaching';
import Advisory from './components/Layout/Advisory';
import Sidebar from './components/Layout/SideBar';



function App() {
  return (
    <Box>
      <Header/>
      <Stack direction="row" spacing={2} justifyContent="space-between">

    <Sidebar/>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/Coaching" element={<Coaching/>}/>
      <Route path="/Advisory" element={<Advisory/>}/>


    </Routes>


      </Stack>
    </Box>
    
  );
}



export default App;
