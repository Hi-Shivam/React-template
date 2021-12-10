import React from 'react';
import large from "../assets/large.png";
import pic from "../assets/hera.png";
import pie from "../assets/pp.png";

 const SectionSixth = () => {
    return (
        <>
            <div className="newSixth">
    <div className="mainSixth">
      <div className="sixthSection">
       <img src={large}/>
      </div>
      <div className="sixthContent">
        <h2>A community of different talents</h2>
        <p>We help monetize your talent, introducing you to your audience.</p>
      </div>
      
      </div>
      <div className="diffrentImg">
        <img src={pic}/>
      </div>
      
      {/* Next Section */}
      <div className="pieSection">
        <div className="pieContent">
          <span>COMMUNITY</span>
          <h3>Pricing</h3>
          <p>We make money through 10% revenue share on all digital or physical sales.
               <br/> <br/><br/>The 90% goes directly to your Paypal account.</p>
        </div>
        <div className="pieDig">
            <img src={pie}/>
        </div>
      </div>
      </div>
        </>
    )
}
export default SectionSixth;