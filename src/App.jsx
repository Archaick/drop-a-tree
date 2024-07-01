import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LiveMap from './components/LiveMap';
import SignUp from './components/SignUp';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/Auth';

function App() {
  return (
    // <BrowserRouter>
    //   <nav>
    //     <Link to="/">Live Map</Link>
    //     <Link to="/signup">Sign Up</Link>
    //   </nav>
    //   <Routes>
    //     <Route path='/signup' element={<SignUp />}/>
    //     <Route path="/" element={<LiveMap />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
        <Auth />
        <LiveMap />
    </div>

  );
}

export default App;
