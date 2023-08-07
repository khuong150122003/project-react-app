
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';




export default function SearchAppBar() {
  return (
    <Grid container>

<Box sx={{ flexGrow: 1 }}>
    <Box bgcolor="" flex={4} p={2} sx={{ display: { xs: "none", sm: "block"  } }}>
        
      <Typography variant="h3" component="h3" color="primary" fontWeight="bold" mb={2}>
  Welcome to SPIRITUP!
</Typography>
<Typography variant="h4" component="h4" color="primary" fontWeight="bold" >
  Courses
</Typography>

      <Box sx={{ display: 'flex', mt: 2 }}>
        
        
  <Box
    sx={{
      width: 200,
      height: 100,
      backgroundColor: 'primary.dark',
      borderRadius: 20,
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mr: 12, // Add margin on the right for a little distance
    }}
  >
    <Typography variant="h6" color="textPrimary" fontWeight="bold">
      Career Orientation
    </Typography>
  </Box>

  <Box
    sx={{
      width: 200,
      height: 100,
      backgroundColor: 'primary.dark',
      borderRadius: 20,
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mr: 12, // Add margin on the right for a little distance
    }}
  >
    <Typography variant="h6" color="textPrimary" fontWeight="bold">
    Skill Development
        </Typography>
  </Box>

  <Box 
    mb={10}
    sx={{
      width: 200,
      height: 100,
      backgroundColor: 'primary.dark',
      borderRadius: 20,
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mr: 12,
      
    }}
  >
    <Typography variant="h6" color="textPrimary" fontWeight="bold">
    Social Relation
    </Typography>
  </Box>


</Box>
<Typography variant="h4" component="h4" color="primary" fontWeight="bold" mb={2}>
  Coming Soon
</Typography>

<Box
  sx={{
    width: 800,
    height: 200,
    backgroundColor: 'primary.dark',
    borderRadius: 20,
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Typography mr={-70 } mt={1} >
  <Box
  sx={{
    width: 70,
    height: 80,
    borderRadius: 50,
    '&:hover': {
      opacity: [0.9, 0.8, 0.7],
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* White Box */}
  <Box
    sx={{
      width: 120,
      height: 100,
      backgroundColor: '#FFFFFF', // White color
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute', // Use absolute positioning
      mt:5,
    }}
  >
    <Typography variant="h6" color="textPrimary" fontWeight="bold">
      16th
    </Typography>
  </Box>
</Box>

    </Typography>
  <Typography variant="h5" color="textPrimary" fontWeight="bold" mr={14}>
    How to find your suitable job 
  </Typography>

  <Typography variant="h5" color="textPrimary" fontWeight="bold" >
    Letured: PhD.Nguyen Thi Phuong Trang
  </Typography>

  <Typography variant="h5" color="textPrimary" fontWeight="bold" mt={1} mr={70}>
  For Beginner
  </Typography>
  </Box>
</Box>  
</Box>
<Grid item xs={8} sm={5}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 5,
                width: 480,
                height: 560,
              },
            }}
          >
   <Box ml={1}>
      <Typography variant="h6" color="primary" fontWeight="bold">
        News
      </Typography>
      
      <Paper elevation={8}>
      <div  >
            <Typography variant="h5" color="primary" fontWeight="bold">
              EXHIBITION "Social Business Creation 2023"
            </Typography>
            <Typography variant="body2" color="textSecondary">
              "June 07, 2023"
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="primary" fontWeight="bold">
              TALKSHOW "Personal development in the digital age"
            </Typography>
            <Typography variant="body2" color="textSecondary">
              "June 06, 2023"
            </Typography>
          </div>
          <div>
            <Typography variant="h5" color="primary" fontWeight="bold">
              WORKSHOP "Unlocking job happiness"
            </Typography>
            <Typography variant="body2" color="textSecondary">
              "May 30, 2023"
            </Typography>
          </div>
        <Stack direction="row" alignItems="center" spacing={1} flex={2} p={30}>
        
         
      
        </Stack>
      </Paper>
    </Box>


          </Box>
        </Grid> 
        </Grid>

  );
}


function Major(arg0: string) {
  throw new Error('Function not implemented.');
}
