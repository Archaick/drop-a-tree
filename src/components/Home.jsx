import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Home = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(true)
    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive)
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
    }

    return (
        <section>
            <h2>Homepage</h2>
            <form action="">
                {isSignUpActive && <legend>Sign up</legend>}
                {!isSignUpActive && <legend>Sign In</legend>}
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password'/>
                        </li>
                    </ul>
                    {isSignUpActive && <button type='button'>Sign Up</button>} 
                    {!isSignUpActive && <button type='button'>Log in</button>} 
                    
                </fieldset>
                {isSignUpActive && <a onClick={handleMethodChange}>Login</a>} 
                {!isSignUpActive && <a onClick={handleMethodChange}>Create an Account</a>}
            </form>
        </section>
  )
}

export default Home
