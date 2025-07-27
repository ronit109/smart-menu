import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'
import Payment from './pages/Payment' 
import OrderTracking from './pages/OrderTracking'; 
import Feedback from './pages/Feedback'
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path='/payment' element={<Payment />} />
                <Route path="/ordertracking" element={<OrderTracking />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
    </Router>
  );
}

export default App;
