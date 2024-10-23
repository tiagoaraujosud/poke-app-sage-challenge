import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route >
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
      
    )
  }
  
export { AppRoutes }
export default AppRoutes