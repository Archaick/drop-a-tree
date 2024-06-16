import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
