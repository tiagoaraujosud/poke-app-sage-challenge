import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Pokemon from '../pages/Pokemon/Pokemon';

const AppRoutes = () => {
    return (
        <BrowserRouter>
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