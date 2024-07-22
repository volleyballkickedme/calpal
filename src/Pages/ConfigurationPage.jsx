import React from 'react'
import UserProfile from '../Components/UserProfile'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { useNavigate } from 'react-router-dom';

const ConfigurationPage = () => {
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnszKoSKd2Phw2-zf8psliHf4oryk9Ue4",
    authDomain: "calpal-25266.firebaseapp.com",
    projectId: "calpal-25266",
    storageBucket: "calpal-25266.appspot.com",
    messagingSenderId: "234472396313",
    appId: "1:234472396313:web:9908a60b2af1ec8e2c3c88",
    measurementId: "G-NV6X28LXNQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  //calculator function to calculate BMR
  function calculator(weight, height, age, gender, activityLevel) {
    const BMR = 10 * weight + 6.25 * height - 5 * age + gender;
    return activityLevel * BMR;
  }

  //redirect if not all fields are filled
  const navigate = useNavigate()

  //function to push user profile to database
  const addProfile = (height, age, weight, gender, activityLevel) => {
    if (height && weight && age && gender && activityLevel) {
      const BMR = calculator(weight, height, age, gender, activityLevel);
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          getDoc(docRef).then(docSnap => {
            const userData = docSnap.data();
            setDoc(docRef, {
              BMR: BMR,
              height: height,
              weight: weight,
              age: age,
              gender: gender,
              activityLevel: activityLevel,
              name: userData.name
            }).catch((error) => {
              console.error("Error writing document: ", error);
            });
          });
        } else {
          alert("No user is signed in.");
        }
      });
    } else {
      navigate('/profile')
    }
  }
  return (
    <UserProfile addProfile={addProfile} />
  )
}

export default ConfigurationPage