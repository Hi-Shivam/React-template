import React from 'react';
import BlueSecImg from './BlueSecImg';
import WomenImg from './WomenImg';

 const LastBlueSection = () => {
    return (
        <>
           <div className="lastBlue">
      <WomenImg/>
      <div className="lastBlueHead">
        <h2 >Mert Your Talent Features</h2>
      </div>
        <div className="lastBluediv">
          <div className="lastBlueCont">
            <BlueSecImg/>
            <p>Embed your store on your website </p>

          </div>
          <div className="lastBlueCont">
         <BlueSecImg/>
            <p>Direct communication with your Supporters </p>
          </div>
          <div className="lastBlueCont">
          <BlueSecImg/>
            <p>You control your pricing</p>
          </div>
          <div className="lastBlueCont">
          <BlueSecImg/>

            <p>No need to enter high paid subscription package </p>
          </div>
          <div className="lastBlueCont">
          <BlueSecImg/>
          
            <p>Sell Full Albums.
 TV/Film License.
 Non-Exclusive License.
 Exclusive License.
 
</p>
          </div>
          <div className="lastBlueCont">
          <BlueSecImg/>

            <p>Free Downloads</p>
          </div>

          
         
        </div>
      </div> 
        </>
    )
}

export default LastBlueSection;
