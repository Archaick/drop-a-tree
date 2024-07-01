import React, { useRef, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            setError(error.massage)
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} placeholder='Email' required />
            <input type="password" ref={passwordRef} placeholder='Password' required />
            {error && <p>{error}</p>}
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignUp