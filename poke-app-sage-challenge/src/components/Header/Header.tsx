import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Header = () => {
  const pokemonStoreState = useSelector((state: RootState) => state.pokemon);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Pokedex
        </Typography>
        {pokemonStoreState.name !== "" && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Last Viewed Pokemon {pokemonStoreState.name}
          </Typography>
        )}
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/list">List</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;