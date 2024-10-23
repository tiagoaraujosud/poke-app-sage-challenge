import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que Link é importado
import { AppBar, Toolbar, Typography, Button } from '@mui/material';  // Importações do Material UI

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/list">List</Button>
      </Toolbar>
    </AppBar>
  );
};


export default Header;