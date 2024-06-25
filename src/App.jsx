import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LiveMap from './components/LiveMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LiveMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
