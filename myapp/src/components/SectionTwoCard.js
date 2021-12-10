import React from 'react'
import SectionThird from './SectionThird';
import SectionFourth from './SectionFourth';
import Slider from "react-slick";
import image1 from "../assets/image1.jpg";
import red from "../assets/red.png";
import purple from "../assets/purple.jpeg";
import mic from "../assets/mic.jpg";
import black from "../assets/black.jpeg";

 const SectionTwoCard = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            },breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ],
      }
    return (
        <>
            <div className="vector">

<div className="cardSection">
      
       <div className="cardHeading">
       <h2>BEST SELLING MUSIC</h2>
       <h3>BEST SELLING MUSIC</h3>
       </div>
       <div className="card">
       
       <Slider {...settings}>
       <div>
       
    <div className="cardItem">
      <div className="cardImg">
        <img src={image1}/>
      </div>
      <p className="Para1">Vinyl and CD bundle</p>
      <div className="cardImg">
      <hr/>
      </div>
          <p className="Para2">By Lunar</p>
          <h4>Sold for $5</h4>
          <div className="flag">
            <img src={red}/>
            <p className="Para3">India</p>
          </div>
    
    </div>
    </div>
    <div>
    <div className="cardItem">
      <div className="cardImg">
        <img src={mic}/>
      </div>
      <p className="Para1">Vinyl and CD bundle</p>
      <div className="cardImg">
      <hr/>
      </div>
          <p className="Para2">By Lunar</p>
          <h4>Sold for $5</h4>
          <div className="flag">
            <img src={red}/>
            <p className="Para3">India</p>
          </div>
    </div>
    </div>
    <div>
    <div className="cardItem">
      <div className="cardImg">
        <img src={purple}/>
      </div>
      <p className="Para1">Eco-mix LP</p>
      <div className="cardImg">
      <hr/>
      </div>
          <p className="Para2">By Lunar</p>
          <h4>Sold for $5</h4>
          <div className="flag">
            <img src={red}/>
            <p className="Para3">Sudan</p>
          </div>
    </div>
    </div>
    <div>
    <div className="cardItem">
      <div className="cardImg">
        <img src={image1}/>
      </div>
      <p className="Para1">Y U QT-Like Dat ft.Logan</p>
      <div className="cardImg">
      <hr/>
      </div>
          <p className="Para2">By Lunar</p>
          <h4>Sold for $5</h4>
          <div className="flag">
            <img src={red}/>
            <p className="Para3">Africa</p>
          </div>
    </div>
    </div>
    <div>
    <div className="cardItem">
      <div className="cardImg">
        <img src={black}/>
      </div>
      <p className="Para1">Y U QT-Like Dat ft.Logan</p>
      <div className="cardImg">
      <hr/>
      </div>
          <p className="Para2">By Lunar</p>
          <h4>Sold for $5</h4>
          <div className="flag">
            <img src={red}/>
            <p className="Para3">Africa</p>
          </div>
    </div>
    </div>
    
  </Slider>
       </div>
       
</div>
    {/* Second Card Section  */}
<div className="cardSection cardSectionMob">
      
      <div className="cardHeading">
      <h2>BEST SELLING MERCH</h2>
      <h3>BEST SELLING MERCH</h3>
      </div>
      <div className="card">
      
      <Slider {...settings}>
      <div>
      
   <div className="cardItem">
     <div className="cardImg">
       <img src={image1}/>
     </div>
     <p className="Para1">Painting</p>
     <div className="cardImg">
     <hr/>
     </div>
         <p className="Para2">By Lunar</p>
         <h4>Sold for $5</h4>
         <div className="flag">
           <img src={red}/>
           <p className="Para3">India</p>
         </div>
   
   </div>
   </div>
   <div>
   <div className="cardItem">
     <div className="cardImg">
       <img src={mic}/>
     </div>
     <p className="Para1">Artwork</p>
     <div className="cardImg">
     <hr/>
     </div>
         <p className="Para2">By Lunar</p>
         <h4>Sold for $5</h4>
         <div className="flag">
           <img src={red}/>
           <p className="Para3">India</p>
         </div>
   </div>
   </div>
   <div>
   <div className="cardItem">
     <div className="cardImg">
       <img src={purple}/>
     </div>
     <p className="Para1">T-Shirt</p>
     <div className="cardImg">
     <hr/>
     </div>
         <p className="Para2">By Lunar</p>
         <h4>Sold for $5</h4>
         <div className="flag">
           <img src={red}/>
           <p className="Para3">Sudan</p>
         </div>
   </div>
   </div>
   <div>
   <div className="cardItem">
     <div className="cardImg">
       <img src={image1}/>
     </div>
     <p className="Para1">Physical CD</p>
     <div className="cardImg">
     <hr/>
     </div>
         <p className="Para2">By Lunar</p>
         <h4>Sold for $5</h4>
         <div className="flag">
           <img src={red}/>
           <p className="Para3">Africa</p>
         </div>
   </div>
   </div>
   <div>
   <div className="cardItem">
     <div className="cardImg">
       <img src={black}/>
     </div>
     <p className="Para1">Y U QT-Like Dat ft.Logan</p>
     <div className="cardImg">
     <hr/>
     </div>
         <p className="Para2">By Lunar</p>
         <h4>Sold for $5</h4>
         <div className="flag">
           <img src={red}/>
           <p className="Para3">Africa</p>
         </div>
   </div>
   </div>
   
 </Slider>
      </div>
</div>
{/* Third Section */}
<SectionThird/>
  {/* Fourth Section */}
<SectionFourth/>

</div>
        </>
    )
}
export default SectionTwoCard;