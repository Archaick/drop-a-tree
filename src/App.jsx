import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import ProtectedRoute from './components/ProtectedRoute'
import { auth } from './firebase'

import Home from './components/Home'
import Private from './components/Private'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        return
      }
      setUser(null)
    })
    return () => unsubscribe()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route index path='/private' 
        element={
        <ProtectedRoute user={user}>
          <Private></Private>
        </ProtectedRoute>
      }>

      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
