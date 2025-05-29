import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

function SideBar({demo}) {
  console.log(demo);
  
  return (
    <div className='sidebar'>
      <div className='sidebar-elm'>

        <ul>
          <li className='user-details-li'>
            <div className='user-details'>
              <img src="/src/images/User image with black background - Free social icons_files/17004.png" alt="" />
            </div>
              <span>User Name</span>
          </li>
          <li>
            <Link to='/logout'>
              <button className='logout-button'>Log out</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar



///