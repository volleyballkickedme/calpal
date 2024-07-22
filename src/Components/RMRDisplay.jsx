import React from 'react'
import ResetButton from './ResetButton.jsx'

const RMRDisplay = ({ calories }) => {
  return (
    <>
        <h3>Total Calories Consumed: { calories }</h3>
        <ResetButton />
    </>
  )
}

export default RMRDisplay