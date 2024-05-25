import * as React from 'react';
import Box from '@mui/material/Box';
import UserTable from "./sellertable";
import DashboardStats from './admincard';


  export default function CSSGrid() {
    return (
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={9}>
          
        <Box gridColumn="span 12">
            <DashboardStats />
          </Box>
          <Box gridColumn="span 12">
            <div>
                <UserTable/>
            </div>
          </Box>
        </Box>
      </Box>
    );
  }