import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'


const Header = () => {
  return (
      <header>
          <nav className='nav'>
            <div className='nav_title'><Link to='/'><strong>e-commerce</strong></Link></div>
          <ul className='nav_items'>
                  <li className='nav_login'><Link to='/login'>Login</Link></li>
          <li className='nav_cart'><Link to='/cart'>Cart</Link></li>
          <li className='purchases'><Link to='/purchases'>Purchases</Link></li>
          </ul>
      </nav>
      </header>
  )
}

export default Header