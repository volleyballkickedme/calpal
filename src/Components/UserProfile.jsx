import React, { act } from 'react'
import { useState } from 'react'
import Navbar from '../Components/NavBar'
import { useNavigate } from 'react-router-dom'

const UserProfile = ({ addProfile }) => {
    //styling
    const profilePage = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const profile = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        backgroundColor: 'aliceblue',
        fontWeight: 'bold',
        padding: '50px',
        borderRadius: '10px'
    }

    const profileContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }

    //state variables
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [activityLevel, setActivityLevel] = useState('')
    
    const navigate = useNavigate()

    //function that is called on submission of form
    const submitForm = (event) => {
        event.preventDefault()

        //push profile object to database
        addProfile(height, age, weight, gender, activityLevel)
        return height && age && weight && gender && activityLevel ? 
             navigate('/')
            :  navigate('/profile')
    }

    return (
        <div style={ profilePage }>
            <Navbar showLinks={ false } />
            <div style={ profileContainer }>
                <form style={ profile } onSubmit={ submitForm }>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" value={ gender } onChange= {(event) => setGender(event.target.value)}>
                        <option></option>
                        <option value="5">Male</option>
                        <option value="-161">Female</option>
                    </select>

                    <label htmlFor="activityLevel">Activity Level:</label>
                    <select id="activityLevel" value={ activityLevel } onChange={ (event) => setActivityLevel(event.target.value) }>
                    <option></option>
                        <option value="1.2">Sedentary</option>
                        <option value="1.375">Lightly Active</option>
                        <option value="1.55">Moderately Active</option>
                        <option value="1.725">Active</option>
                        <option value="1.9">Very Active</option>
                    </select>

                    <label htmlFor="height">Height(cm):</label>
                    <input type="number" id="height" value={ height } onChange={ (event) => setHeight(event.target.value) } />

                    <label htmlFor="weight">Weight(kg):</label>
                    <input type="number" id="weight" value={ weight } onChange={ (event) => setWeight(event.target.value) } />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" value={ age } onChange={ (event) => setAge(event.target.value) } style={{marginBottom: '15px'}} />

                    <input type="submit" value="submit" style={{width: '100px', padding: '7px', backgroundColor: 'gray', color: 'black', fontWeight: 'bold', borderRadius: '5px'}} />
                </form>
            </div>
        </div>
    
  )
}

export default UserProfile