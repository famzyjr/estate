import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
// import {BsFillchatDotsFill} from 'react-icons/bs';
import { BsFillChatDotsFill } from 'react-icons/bs';
import  {HiChatBubbleBottomCenter} from 'react-icons/hi2';
function Contact() {
  return (
    <section className='c-wrapper' >
     <div className='paddings innerWidth flexCenter  c-container ' >
              {/* left side */}
              <div className=" flexColStart c-left">
                <span className='orangeText' >Our Contacts</span>
                <span className='primaryText' >Easy to  contact us</span>
                <span>we always ready to help by providing the best service belive a good<br/> place to live can make your life better</span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall className='call' size={25} />
                            </div>
                            <div className="flexColStart detail ">
                              <span className='primaryText' >Call </span>
                              <span className='secondaryText' >09025330344</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Call Now</div>
                    </div>
                </div>
                  {/* second row */}
                  <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill className='call' size={25} />
                            </div>
                            <div className="flexColStart detail ">
                              <span className='primaryText' >Chat </span>
                              <span className='secondaryText' >09025330344</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Chat Now</div>
                    </div>
                </div>
                  
                <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter className='call' size={25} />
                            </div>
                            <div className="flexColStart detail ">
                              <span className='primaryText' >Message </span>
                              <span className='secondaryText' >09025330344</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Message Now</div>
                    </div>
                </div>



                      

                      {/* second row */}
                <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill className='call' size={25} />
                            </div>
                            <div className="flexColStart detail ">
                              <span className='primaryText' >Video Call</span>
                              <span className='secondaryText' >09025330344</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Video Call Now</div>
                    </div>
                </div>

               

              

               </div>
                
                    <div>

                    </div>
                    </div>


              <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
              </div>
     </div>
    </section>
  )
}

export default Contact