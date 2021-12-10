import React from 'react';
import './App.css';
import Footer from './components/Footer';
import SectionOne from './components/SectionOne';
import SectionTwoCard from './components/SectionTwoCard';
import SectionSixth from './components/SectionSixth';
import SectionFifth from './components/SectionFifth';
import LastBlueSection from './components/LastBlueSection';

function App() {

  
  return (
    <>
     <SectionOne/>
   
      {/* Card Section */}
      <SectionTwoCard/>

      {/* fifthSection */}
     <SectionFifth/>

      {/* Sixth Section */}
      <SectionSixth/>

      {/* Last blue Section */}
      <LastBlueSection/>

      {/* Footer */}
      <Footer/>
      
    </>
  );
}

export default App;
