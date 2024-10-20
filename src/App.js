import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Family from './components/Family';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contributions from './components/Contributions';
import Footer from './components/Footer';
import './App.css';  // Optional if you have custom styling

function App() 
{
  return (
    <div>
      <Header />
      <Introduction />
      <Family />
      <Education />
      <Certificates />
      <Contributions />
      <Footer />
    </div>
  );
}

export default App;
