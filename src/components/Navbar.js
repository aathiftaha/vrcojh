import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>
            <NavLink to="/">HOME</NavLink>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
            <NavLink to="/bmi">BMI</NavLink>
        </Typography>
      </Box>
      
    </React.Fragment>
  );
}
