import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} WeatherApp. All rights reserved - Saurav Kumar</p>
    </footer>
  );
};

export default Footer;
