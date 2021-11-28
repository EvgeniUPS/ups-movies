import React from 'react'
import { Link } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav')
  var options = {}
  if (typeof M == 'undefined') {
    var M = {}
  }
  var instances = M.Sidenav.init(elems, options)
})

function Header() {
  return (
    <>
      <nav className='green darken-2'>
        <div class='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            UPS app
          </Link>
          <a href='#!' data-target='mobile-demo' class='sidenav-trigger'>
            <i class='material-icons'>menu</i>
          </a>
          <ul class='right hide-on-med-and-down'>
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

      <ul class='sidenav' id='mobile-demo'>
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
    </>

    // <nav className='green darken-2'>
    //   <div className='nav-wrapper'>
    //     <Link to='/' className='brand-logo'>
    //       UPS app
    //     </Link>
    //     <ul id='nav-mobile' className='right hide-on-med-and-down'>
    // <li>
    //   <Link to='/'>Movies</Link>
    // </li>
    // <li>
    //   <Link to='/english'>English</Link>
    // </li>
    // <li>
    //   <Link to='/weather'>Weather</Link>
    // </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default Header
