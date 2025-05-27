import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Routes from './LayoutRoutes/Routes'

// import Routes from './LayoutRoutes/Routes'

function App() {


  return (
    <>
    {/* <Header/>
    <Home/>
    <Footer/> */}
    <Routes/>
    </>
  )
}

export default App

