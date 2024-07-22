import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/styles.css"
import logo from '../assets/logo.png'

const Navbar = ({ showLinks = true}) => {
  return (
    <div className="navbar">
      <img src={logo} className='logo' /> 
      { showLinks ? 
        <nav className='links'> 
        <NavLink 
        to="/" 
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'darkgreen' : 'transparent', 
          color: 'white', 
          padding: '15px', 
          fontSize: 'larger',
          borderRadius: 10
        })}
      >
        Home
      </NavLink>

        <NavLink to='/about' style={ ({ isActive }) => ({
            backgroundColor: isActive ? 'darkgreen' : 'transparent',
            color: 'white',
            padding: '15px',
            fontSize: 'larger',
            borderRadius: 10
          })}
          >About</NavLink>

          <NavLink to='/login' style={ ({ isActive }) => ({
            backgroundColor: isActive ? 'darkgreen' : 'transparent',
            color: 'white',
            padding: '15px',
            fontSize: 'larger',
            borderRadius: 10
          })}
          >Logout</NavLink>
        </nav>
      : <div></div> 
      }
    </div>
  )
}

export default Navbar