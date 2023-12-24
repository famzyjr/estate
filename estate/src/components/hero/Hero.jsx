import React from "react";
import "./hero.css";
import { CiLocationOn } from "react-icons/ci";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side*/}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText" >Find a variety of properties that suit you very easilty</span>
            <span  className="secondaryText" >Forget all difficulties in finding a residence for you</span>
          </div>
          <div className=" flexCenter search-bar">
          <CiLocationOn className="location" />
          <input placeholder="Search here" type="text"/>
          <button className="button">Search</button>

          </div>
           <div className="flexCenter stats">
            <div className="flexColCenter stat">
             <span>
              <CountUp start={88000} end={9000} duration={4} />
              <span>+</span>
             
              </span>
               <span className="secondaryText" >Premium Products </span>
            </div>
            <div className="flexColCenter stat ">
             <span>
              <CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
              </span>
              <span className="secondaryText" >Happy Customers</span>
            </div>

            <div className="flexColCenter stat ">
             <span>
              <CountUp  end={28}/>
              <span>+</span>
            
              </span>
               <span className="secondaryText" >Award winnings</span>
            </div>
           </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">   
            <img src="./hero-image.png" alt="hero-img" />
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
