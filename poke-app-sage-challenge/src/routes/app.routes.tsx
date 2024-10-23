import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Pokemon from '../pages/Pokemon/Pokemon';
import Header from '../components/Header/Header';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route >
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                </Route>
            </Routes>
        </BrowserRouter>
      
    )
  }
  
export { AppRoutes }
export default AppRoutes