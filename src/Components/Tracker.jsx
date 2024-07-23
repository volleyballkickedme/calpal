import React from 'react'
import '../css/styles.css'
import RMRDisplay from './RMRDisplay.jsx'
import CalorieTracker from './CalorieTracker.jsx'
import { doc, getDoc } from "firebase/firestore";

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

  const docRef = doc(db, "cities", "SF");
  const docSnap = async () => await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return (
    <div style={ style }>
      <RMRDisplay rmr='1000' />
      <CalorieTracker />
    </div>
  )
}

export default Tracker