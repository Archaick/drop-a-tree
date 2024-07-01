import { useRef, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const SignIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            // handle later
        } catch (err) {
            setError(err.massage)
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} placeholder="Email" required />
                <input type="email" ref={passwordRef} placeholder="Password" required />
                {error && <p>{error}</p>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
