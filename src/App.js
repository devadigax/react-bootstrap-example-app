import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/Navbar.js';
import Home from './components/Homepage.js';
import About from './components/About.js';
import Team from './components/Team.js';
import Services from './components/Services.js';
import ContactUs from './components/ContactUs.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
    <div className="App">
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
