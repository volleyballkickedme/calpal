import React from 'react'
import WelcomeMessage from '../Components/WelcomeMessage.jsx'
import Tracker from '../Components/Tracker.jsx'
import { Link } from 'react-router-dom'
const Homepage = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'aliceblue',
    color: 'white',
    textAlign: 'center'  // Ensures text within containers is centered
  }
  return (
    <div className='homeContainer' style={styles}>
      <WelcomeMessage username='Username placeholder'/>
      <Tracker />
      <Link to='/profile'>Link to user profile, for debugging</Link>
    </div>
  )
}

export default Homepage