import React from 'react'
import SectionOneCont from './SectionOneCont';
import Navlist from './Navlist';
import img from "../assets/logo1.png";
import imgGirl from "../assets/Girl.png";

 const SectionOne = () => {
    return (
        <>
          <div className="bg">
      <div className="backGroundBlue">
         <div className="Navbar">
         <img src={img}/>
           <Navlist/>
            <i  class="fa fa-bars" aria-hidden="true"></i>
         </div>
      
         <SectionOneCont/>
          
           </div>
           <div className="imgContent">
                 <img src={imgGirl}/>
           </div>
      </div>  
        </>
    )
}
export default SectionOne;
