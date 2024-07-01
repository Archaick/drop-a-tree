import React, { useState, useRef } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)
    const [isSignUp, setIsSignUp] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            } else {
                await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            }
        } catch (err) {
            setError(err.message)
            console.log(error)
        }
    }

    return (
        <div>
            <h2>{isSignUp ? 'Register' : 'Log In'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} placeholder='Email' required/>
                <input type="password" ref={passwordRef} placeholder='Password' required/>
                {error && <p>{error}</p>}
                <button type='submit' onClick={() => setIsSignUp(!isSignUp)}> 
                    {isSignUp ? 'Register' : 'Log In'}
                </button>
            </form>
        </div>
    )
}

export default Auth
