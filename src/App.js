import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainSection from './components/MainSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import './App.css'; // General styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainSection />
        {/* Add the correct IDs to these sections */}
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </div>
    </Router>
  );
}

export default App;
