import { Typography, Box, Select, MenuItem, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

const Coaching: React.FC = () => {
  const [] = useState<Date | null>(null);


  function setSelectedDate(date: Date | null) {
    throw new Error('Function not implemented.');
  }

 

  return (
    <>
      <Box  
       sx={{ overflow: 'hidden', borderRadius: 'sm', bg: 'white', boxShadow: 'default', border: 'strokedark',}}>
        <Box sx={{ position: 'relative', height: { xs: '50px', md: '90px' }, px: 4, pb: { xs: '60px', md: '80px', xl: '115px' } }}>
          <Typography color="#000ab6"  variant="h2" sx={{ mb: '1.5', fontWeight: 'bold', fontSize: { xs: '4xl', md: '5xl' }, pt: { xs: '10px', md: '5px' }, pb: '5px', px: { xs: '5px', md: '15px' } }}>
            1 ON 1 COACHING
          </Typography>
          <Typography color="#1b37c7" mr={77} variant="h2" sx={{   fontSize: { xs: 'xl', md: '1xl' }, px: '15px', pb: '5px' }}>
            1 on 1 Coaching with MBA. Alex Nguyen
          </Typography>
          <Typography color="#1b37c7" sx={{ fontSize: 'sm', px: '15px' }}>
            1 on 1 coaching is an hour course held over Zoom with an expert MBA, Alex Nguyen.
            <br />
            These coaching sessions are unique to you and are based on your individual needs.
          </Typography>
        </Box>
        <Box py={6} mt={15}  bgcolor={'skyblue'}>
        <Grid container spacing={4} >
          <Grid item xs={12} md={6} key="instructors-grid">
            <div>
              <Typography variant="h5" className="font-bold" >
                Tran Xuan Linh
              </Typography>
              <Typography variant="subtitle1" className="text-lg">
                Major: Business Administration Lecturer
              </Typography>
              
              <Typography variant="subtitle1" className="text-lg">
                Located: Greenwich VietNam - HCMC Campus
              </Typography>
              <Typography variant="body1" className="font-medium" >
                Status: <span style={{ color: '#00b025', fontWeight: 'bold' }}>Active</span> 
              </Typography>
            </div>
            <br />
            <div>
            
              <Typography variant="h5" className="font-bold">
                Nguyen Hong Phu Bao
              </Typography>
              <Typography variant="subtitle1" className="text-lg">
                Major: Information Technology Lecturer
              </Typography>
              <Typography variant="subtitle1" className="text-lg">
                Located: Greenwich VietNam - HCMC Campus
              </Typography>
              <Typography variant="body1" className="font-medium">
              Status: <span style={{ color: '#00b025', fontWeight: 'bold' }}>Active</span> 
             </Typography>
            </div>
            <br />
            <div>
              <Typography variant="h5" className="font-bold">
                Nguyen Duc Son
              </Typography>
              <Typography variant="subtitle1" className="text-lg">
                Major: Graphic Design Lecturer
              </Typography>
              <Typography variant="subtitle1" className="text-lg">
                Located: Greenwich VietNam - HCMC Campus
              </Typography>
              <Typography variant="body1" className="font-medium">
              Status: <span style={{ color: '#00b025', fontWeight: 'bold' }}>Active</span> 
               </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} key="date-time-grid">
            <div>
              <Typography variant="body1" className="font-medium text-xl">
                Select a Date:
              </Typography>
              <div className="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
        <DemoItem >
            <DatePicker
              value={setSelectedDate}
            />
        </DemoItem>
        </DemoContainer>
        </LocalizationProvider>
              </div>
              <Typography variant="body1" className="font-medium text-xl pt-10">
                Select a Time:
              </Typography>
              <Select className="px-12 pb-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-primary">
                <MenuItem value="">-- Select Time --</MenuItem>
                <MenuItem value="8:00 AM">8:00 AM</MenuItem>
                <MenuItem value="9:00 AM">9:00 AM</MenuItem>
                <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                <MenuItem value="12:00 PM">12:00 PM</MenuItem>
                <MenuItem value="1:00 PM">1:00 PM</MenuItem>
                <MenuItem value="2:00 PM">2:00 PM</MenuItem>
                <MenuItem value="3:00 PM">3:00 PM</MenuItem>
                <MenuItem value="4:00 PM">4:00 PM</MenuItem>
                <MenuItem value="5:00 PM">5:00 PM</MenuItem>
              </Select>
            </div>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </>
  );
};

export default Coaching;
