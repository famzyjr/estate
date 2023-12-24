import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo2" width={120} />
                 <div className="secondaryText">
                    Our vision is to make all people<br/>
                    the best place to live for them.
                 </div>
            </div>
        </div>
          <div className=" flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText' >Number 1 Aderinto Street isolo lagos </span>
           
             <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Service</span>
              <span>product</span>
               <span>About Us</span>
             </div>
          </div>
    </div>
  )
}

export default Footer