
import { Dashboard, NoteAlt, QuestionAnswer, Subject } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import Courses from "./Courses";


const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      width={230} 
      height={790}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List sx={{mt:15,}} >
        <ListItem disablePadding>
          <ListItemButton component="a" href="/Dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/Courses">
            <ListItemIcon>
              <Subject />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/Coaching">
            <ListItemIcon>
              <NoteAlt />
            </ListItemIcon>
            <ListItemText primary="1 on 1 Coaching" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/Advisory">
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Advisory Board" />
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );
};

export default Sidebar;
