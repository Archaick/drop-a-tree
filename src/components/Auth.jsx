import React, { useState, useRef } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {
    emailRef = useRef()
    passwordRef = useRef()
    const [error, setError] = useState(null)
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <div>
        
        </div>
    )
}

export default Auth
