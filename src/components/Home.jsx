import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Home = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignUpActive, setIsSignUpActive] = useState(true)
    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive)
    }


    const handleSignUp = () => {
        if (!email || !password) return
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
    }

    const handleSignIn = () => {
        if (!email || !password) return
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
    }

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

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
                            <input type="text" id='email' onChange={handleEmailChange}/>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={handlePasswordChange}/>
                        </li>
                    </ul>
                    {isSignUpActive && <button type='button' onClick={handleSignUp}>Sign Up</button>} 
                    {!isSignUpActive && <button type='button' onClick={handleSignIn}>Log in</button>} 
                    
                </fieldset>
                {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
                {!isSignUpActive && <a onClick={handleMethodChange}>Create an Account</a>}


            </form>
        </section>
  )
}

export default Home
