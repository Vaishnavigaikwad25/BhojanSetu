import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';
import DonateFood from './pages/DonateFood';
import About from './About';
import RequestFood from './pages/RequestFood';
import Volunteer from './pages/Volunteer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate-food" element={<DonateFood />} />
        <Route path="/request-food" element={<RequestFood />} />
        <Route path="/about" element={<About />} />
         <Route path="/volunteer" element={<Volunteer />} />
         
      </Routes>
    </Router>
  );
}

export default App;
