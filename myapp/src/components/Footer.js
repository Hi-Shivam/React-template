import React from 'react';
import FooterIcon from './FooterIcon';

 const Footer = () => {
    return (
        <>
             <div className="footer">
        <div className="footerIcon">
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
        </div>
        <div className="footerContent">
            <div className="faIcon">
            <i class="fa fa-paper-plane-o" aria-hidden="true">San Francisco</i>
            <i class="fa fa-comment-o" aria-hidden="true">English</i>
            </div>
            <div className="border">
             <p>By using this site you agree to our <span>Cookie Policy</span></p>
            </div>
            <div className="copy">
               <p>© Copyright 2021</p>
            </div>
             
        </div>
        <hr/>
        <div className="footerLast">
        <FooterIcon/>
        </div>
      </div>
        </>
    )
}

export default Footer;