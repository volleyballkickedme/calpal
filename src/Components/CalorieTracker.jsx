import React from 'react'

const CalorieTracker = ({ rmr=0 }) => {
    const tableStyle = {
        display: 'flex',
        justifyContent:'space-around',
        color: 'white',
        fontSize: 20
    }
    let foodItem = ""
  return (
    <>
    <p className="bmr-el">BMR: { rmr }</p>
        <input type="text" className="food-input" placeholder="Enter food item" required />
        <button className="submit-button">Get Nutrition Info</button>
    <table style = { tableStyle }>
            <thead>
                <tr>
                    <th>Food Item</th>
                    <th>Calories</th>
                    <th>Fat (g)</th>
                    <th>Protein (g)</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </>
  )
}

export default CalorieTracker