import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import PokemonComponent from '../pages/Pokemon/PokemonComponent';
import Header from '../components/Header/Header';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route >
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/pokemon/:name" element={<PokemonComponent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }
  
export { AppRoutes }
export default AppRoutes