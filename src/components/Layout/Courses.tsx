import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Rating from '@mui/material/Rating';




export default function SearchAppBar() {
  return (
    <Box bgcolor="" flex={4} p={2}>
      <Grid container>
      <Box bgcolor="" flex={2} p={1} sx={{ display: { xs: "none", sm: "block"  } }}>

<Box sx={{ flexGrow: 1 }}>
  
  

  <Typography variant="h4" component="h4" color="primary" fontWeight="bold" >
Courses
</Typography>

<Box sx={{ display: 'flex'  }}>

<Box

sx={{
  
  width: 20,
  height: 50,
  
  borderRadius: 20,
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: 5, 
  
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold" >
  All
</Typography>
</Box>
<Box
sx={{
  width: 20,
  height: 50,
  borderRadius: 20,
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: 10, 
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold"  >
  Active
</Typography>
</Box>
<Box
sx={{
  width: 20,
  height: 50,
  borderRadius: 20,
  '&:hover': {
    
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: 3, 
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold">
  Completed
</Typography>
</Box>
</Box>



  <Box sx={{ display: 'flex', mt: 2 }}>

<Box
sx={{
  width: 170,
  height: 50,
  backgroundColor: 'primary.dark',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: 3, 
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold">
  Career Orientation
</Typography>
</Box>

<Box
sx={{
  width: 170,
  height: 50,
  backgroundColor: 'primary.dark',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: 3, // Add margin on the right for a little distance
}}
> 
<Typography variant="h6" color="textPrimary" fontWeight="bold">
Skill Development
    </Typography>
</Box>

<Box 
mb={3}
sx={{
  width: 170,
  height: 50,
  backgroundColor: 'primary.dark',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  
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
mb={3}
sx={{
  
  width: 450,
  height: 150,
  backgroundColor: 'primary.dark',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold">
what
</Typography>
</Box>
<Box
mb={3}
sx={{
  width: 450,
  height: 150,
  backgroundColor: 'primary.dark',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold">
what
</Typography>
</Box>
<Box
mb={3}
sx={{
  width: 450,
  height: 150,
  backgroundColor: 'primary.dark',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}
>
<Typography variant="h6" color="textPrimary" fontWeight="bold">
what
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
  <Paper elevation={8}>
  <Stack direction="row" alignItems="center" spacing={1} flex={2} p={30}>
    <Box ml={1}>
      <Rating name="size-small" defaultValue={5} size="small" />
    </Box>
    <Typography variant="h6" color="textPrimary" fontWeight="bold">
      BEGINNER
    </Typography>
  </Stack>
  <Typography variant="h6" color="textPrimary" fontWeight="bold" textAlign="center" fontSize="small" mt={-30}>
  Defining Your Career Objective and Action Plan
</Typography>

<Stack direction="row" alignItems="center" justifyContent="center" flex={2} p={2} mt={0.1}>
  <Typography variant="h6" color="textPrimary" fontWeight="bold" textAlign="center" fontSize="small">
    In this course, you will explore how to define your career objective by gaining insights into your interests, skills, and values.
    Additionally, you will learn how to create a strategic action plan that outlines the necessary steps to achieve your professional goals.
  </Typography>
</Stack>
            
</Paper>





          </Box>
        </Grid>

  
      </Grid>
    </Box>

  );
}


function Major(arg0: string) {
  throw new Error('Function not implemented.');
}
