import React from 'react';
import blue from "../assets/Mask.png";
import music from "../assets/music.png";
import Bitmap from "../assets/Bitmap.png";
import boy from "../assets/boy.png";

 const ThirdSecImg = () => {
    return (
        <>
            <img className="imgOne" src={blue}/>
          <img className="imgTwo" src={boy}/>
          <img className="imgThree" src={Bitmap}/>
          <img className="imgFour" src={music}/>
        </>
    )
}
export default ThirdSecImg;