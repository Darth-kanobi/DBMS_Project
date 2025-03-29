import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Flights from './pages/Flights/Flights';
import Hotels from './pages/Hotels/Hotels';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;