import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Scrollbar from './Scrollbar';

const Sidebar = () => {
  const menuItems = ['Overview', 'Charts', 'Maps', 'Reports'];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Scrollbar
        sx={{
          height: '100%',
        }}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Scrollbar>
    </Drawer>
  );
};

export default Sidebar;
