import React from 'react'


const WelcomeMessage = ({ username }) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: 30,
    margin: 0,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgb(0, 150, 0)',
    width: '100vw'
  }
  return (
    <div style={ style }> Welcome back, { username } </div>
  )
}

export default WelcomeMessage