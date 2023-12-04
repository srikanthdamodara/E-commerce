

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar'
import Shopping from './Pages/Shopping';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from "./Components/Assests/banner_mens.png";
import women_banner from "./Components/Assests/banner_women.png";
import kid_banner from "./Components/Assests/banner_kids.png";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route exact  path="/" element={<Shopping/>}/> 
        <Route exact path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route exact path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route exact path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route exact path="/product" element={<Product/>}>
        <Route exact path=":productId" element={<Product/>}/>
</Route>
<Route exact path="/cart" element={<Cart/>}/>
<Route exact path="/login" element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  )
}

export default App
