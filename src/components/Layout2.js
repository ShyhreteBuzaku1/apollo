import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './layout2.css';

const Layout2 = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout2;
