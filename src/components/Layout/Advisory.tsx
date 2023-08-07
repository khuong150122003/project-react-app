import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper, Rating } from '@mui/material';

const AdvisoryBoard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <Box 
      sx={{ overflow: 'hidden', borderRadius: 'sm',  border: 'strokedark' }}>
        <Box  sx={{ position: 'relative', height: { xs: '50px', md: '90px' }, px: 4, pb: { xs: '60px', md: '80px', xl: '115px' } }}>
          <Typography color="#000ab6"  variant="h2" sx={{ mb: '1.5', fontWeight: 'bold',  fontSize: { xs: '4xl', md: '5xl' }, pt: { xs: '10px', md: '5px' }, pb: '5px', px: { xs: '5px', md: '15px' } }}>
            Advisory Board
          </Typography>
          <Box sx={{ px: 4, pb: '6', lg: '8', xl: '11.5', bg: 'whiter' }}>
            <Typography color="#0e4fa1" variant="h3" sx={{ mb: '1.5', fontWeight: 'bold',  fontSize: '3xl', pb: '5px', px: '25' }}>
              You Ask, Experts Answer!
            </Typography>
            <Typography color="#0e4fa1" variant="h2" sx={{ fontWeight: 'bold',  fontSize: '5xl', px: '30', pb: '1' }}>
              Ask us
            </Typography>
            <Typography color="#0e4fa1"  variant="h2" sx={{ fontWeight: 'bold',  fontSize: '5xl', px: '30', pb: '10' }}>
              anything
            </Typography>
            <br />
            <Button
              component="a"
              href="https://www.facebook.com/messages/t/106109639124260"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              sx={{ fontSize: '20px', px: '35', py: '2', borderRadius: 'lg' }}
            >
              Start Chat
            </Button>
          </Box>
        </Box>

        <Box mt={33} sx={{ px: 5, pb: '8', lg: '10', xl: '12' }}>
          <div className="mt-10">
            
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary', fontSize: '3xl', pt: '10', pb: '5' }}>
              Meet the Experts
            </Typography>
<br />

            <Grid container spacing={3}>
              
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 7, borderRadius: 'full' }}>
                  <Typography variant="h4" sx={{ fontSize: 'xl', fontWeight: 'bold', mb: '3' }}>
                    Alex Nguyen
                  </Typography>
                  <Rating name="size-small" defaultValue={5} size="small" />

                  <Typography variant="body1" sx={{ color: 'gray.500' }}>
                    Master of Business Administration
                  </Typography>
                  <Typography variant="body2">Business Lecturer at Greenwich Vietnam</Typography>
                  <Typography variant="body2">Founder/Mentor at Greenwich MarCom Innovation</Typography>
  <Typography variant="body2" sx={{ color: 'gray.500', px: '20' }}>
    <span style={{ color: 'yellow' }}>500</span> Satisfied customers
  </Typography>

                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 6 , borderRadius: 'full' }}>
                  <Typography variant="h4" sx={{ fontSize: 'xl', fontWeight: 'bold', mb: '3' }}>
                    Victor Cat
                  </Typography>
                  <Rating name="size-small" defaultValue={5} size="small" />

                  <Typography variant="body1" sx={{ color: 'gray.500' }}>
                    CFO - CO Founder DEHR Network
                  </Typography>
                  <Typography variant="body2">Risk Management Director at PNJ</Typography>
                  <Typography variant="body2">Head of Risk Management and Compliance at Prudential Vietnam Assurance</Typography>
                  <Typography variant="body2" sx={{ color: 'gray.500', px: '20' }}>
    <span style={{ color: 'yellow' }}>498</span> Satisfied customers
  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper elevation={3} sx={{ p: 6, borderRadius: 'full' }}>
                  <Typography variant="h4" sx={{ fontSize: 'xl', fontWeight: 'bold', mb: '3' }}>
                    Linh Nguyen
                  </Typography>
                  <Rating name="size-small" defaultValue={5} size="small" />

                  <Typography variant="body1" sx={{ color: 'gray.500' }}>
                    CMO of Techfarm digital company
                  </Typography>
                  <Typography variant="body2">More than 8 years of experience in the Fashion and Technology industry, specializing in Strategy, Business Development, Marketing, and Data Analysis</Typography>
                  <Typography variant="body2" sx={{ color: 'gray.500', px: '20' }}>
    <span style={{ color: 'yellow' }}>489</span> Satisfied customers
  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AdvisoryBoard;
