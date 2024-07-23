import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/styles.css"
import logo from '../assets/logo.png'

const Navbar = ({ showLinks = true}) => {
  const navbar = {
    width: '99vw', 
    height: '100px',
    position: 'fixed',
    top: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignitems: 'center',
    backgroundColor: 'green',
    color: 'white',
    
  }

  const menu = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={ navbar }>
      <img src={logo} /> 
      { showLinks ? 
        <nav style={ menu }> 
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