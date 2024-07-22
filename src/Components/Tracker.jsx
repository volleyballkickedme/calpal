import React from 'react'
import '../css/styles.css'
import RMRDisplay from './RMRDisplay.jsx'
import CalorieTracker from './CalorieTracker.jsx'

const Tracker = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40vw',
    height: '50vh',
    borderRadius: 20,
    marginTop: 30
  }
  return (
    <div style={ style }>
      <RMRDisplay rmr='1000' />
      <CalorieTracker />
    </div>
  )
}

export default Tracker