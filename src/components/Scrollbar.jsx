import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const scrollbarClasses = { root: 'mnl__scrollbar__root' };

const Scrollbar = forwardRef(({ slotProps, children, fillContent, sx, ...other }, ref) => (
  <Box
    component={SimpleBar}
    scrollableNodeProps={{ ref }}
    clickOnTrack={false}
    className={scrollbarClasses.root}
    sx={{
      minWidth: 0,
      minHeight: 0,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      '& .simplebar-wrapper': slotProps?.wrapper,
      '& .simplebar-content-wrapper': slotProps?.contentWrapper,
      '& .simplebar-content': {
        ...(fillContent && {
          minHeight: 1,
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
        }),
        ...slotProps?.content,
      },
      ...sx,
    }}
    {...other}
  >
    {children}
  </Box>
));

export default Scrollbar;
