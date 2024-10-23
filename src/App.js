import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSection from './components/MainSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Profile from './components/Profile'; 
import SearchClasses from './components/SearchClasses'; 
import Booking from './components/Booking'; 
import VirtualClassroom from './components/VirtualClassroom'; 
import Forum from './components/Forum'; 
import Reminder from './components/Reminder'; 
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainSection />

        {/* Existing sections */}
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>

        {/* Routes for new components */}
        <Routes>
          <Route path="/profile" element={<ProtectedRoute><Profile userType="teacher" /></ProtectedRoute>} />
          <Route path="/search" element={<SearchClasses />} />
          <Route path="/booking" element={<Booking className="Salsa Class" classPrice={50} />} />
          <Route path="/virtual-classroom" element={<VirtualClassroom />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/reminder" element={<Reminder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
