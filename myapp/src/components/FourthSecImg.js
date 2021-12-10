import React from 'react';
import oval from "../assets/Oval.png";
import oval2 from "../assets/Oval2.png";
import head from "../assets/head.png";
import singer from "../assets/singer.png";

const FourthSecImg = () => {
    return (
        <>
           <img className="one" src={oval}/>
         <img className="two" src={oval2}/>
         <img className="three" src={singer}/>
         <img className="four"src={head}/> 
        </>
    )
}

export default FourthSecImg;
