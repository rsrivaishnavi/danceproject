import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './MainSection.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <h1 style={{color:"maroon"}}>Explore India's Rich Dance Heritage</h1>
      <div className="image-gallery">
        <img src="dance4.jpg" alt="Dance 4" />
        <img src="dance1.jpg" alt="Dance 1" />
        <img src="dance2.jpg" alt="Dance 2" />
        <img src="dance3.jpg" alt="Dance 3" />
        <img src="dance5.jpg" alt="Dance 5"/>
      </div>
      <p style={{color:"maroon"}}>
        Join our community of dancers across India to explore and celebrate the beauty of various classical and folk dances.
      </p>
      
      
    </main>
  );
};

export default MainSection;
