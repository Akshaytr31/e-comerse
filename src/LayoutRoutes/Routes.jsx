import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Logout from '../components/Logout/Logout'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SideBar from '../components/SideBar/SideBar'

function RoutesLayout() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <SideBar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default RoutesLayout


////