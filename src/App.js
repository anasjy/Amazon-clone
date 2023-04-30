import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    //BEM
    <Router>
    <div className="app">
    <Header />
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;
