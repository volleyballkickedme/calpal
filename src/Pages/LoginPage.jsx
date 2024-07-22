import React from 'react'
import '../css/styles.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="loginpage"> 
        <div>
            <div class="container" id="container">
                <div class="form-container sign-up">
                    <form id='sign-up-form'>
                        <h1>Create Account</h1>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" id="sign-up-name" />
                            <input type="email" placeholder="Email" id="sign-up-email" />
                            <input type="password" placeholder="Password" id="sign-up-password" />
                            <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in">
                    <form id="sign-in-form">
                        <h1>Sign In</h1>
                        <span>or use your email and password</span>
                        <input type="email" placeholder="Email" id="sign-in-email" />
                        <input type="password" placeholder="Password" id="sign-in-password" />
                        <a href="#">Forget Your Password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button class="hidden" id="login">Sign In</button>
                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button class="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link to='/'>To home page, for debugging</Link>
    </div>
  )
}

export default LoginPage