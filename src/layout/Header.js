import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='green darken-2'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          UPS app
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Movies</Link>
          </li>
          <li>
            <Link to='/english'>English</Link>
          </li>
          <li>
            <Link to='/weather'>Weather</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
