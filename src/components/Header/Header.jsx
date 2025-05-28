import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header({ toggleFilter }) {
  return (
    <header> 
      <div className='header'>
        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
          <h1>Techflix store</h1>
        </Link>
        <ul className='header-list'>
          <li onClick={toggleFilter}>Filter</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
