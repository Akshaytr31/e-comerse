import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../components/Home/Home'

function Routes() {
  return (
    <>
    <Router>
        <Headers/>
        <Routes>
            <Route path='/' element={<Home/>}/>

        </Routes>
        <Footer/>
    </Router>
      
    </>
  )
}

export default Routes
