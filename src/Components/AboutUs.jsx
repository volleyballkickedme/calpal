import React from 'react'

const AboutUs = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'aliceblue',
    color: 'black',
    textAlign: 'center'  // Ensures text within containers is centered
  }
  const text = {
    color: 'black',
    width: '60%',
    backgroundColor: 'green',
    padding: '75px',
    borderRadius: 10
  }
  return (
    <div style={ styles } >
      <div style={ text }>
          <p>
              This app was created to help individuals track their daily calorie intake and manage their nutritional goals efficiently. Our goal is to provide an easy-to-use platform that assists users in maintaining a healthy lifestyle.
          </p>
          <p>
              Resting Metabolic Rate (BMR) is the number of calories that your body burns when it is at complete rest. Your RMR is affected by your activity level, height, weight and age.In this app we have used the Mifflin-St Jeor equation to determine your resting metabolic rate based on then abovementioned factors to give you an estimate of the number of calories you should be consuming to mantain your bodyweight.
          </p>
      </div>
    </div>
  )
}

export default AboutUs