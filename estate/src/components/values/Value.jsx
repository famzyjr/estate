import React, { useState } from 'react'
import './value.css';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionState, AccordionItemState,} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../utils/accordion';
import {MdOutlineArrowDropDown} from 'react-icons/md';
const Value = () => {
  
             const [className,setClassName] = useState(null)
  return (
    <section className='V-wrappe' >
     <div className='paddings innerWidth flexCenter v-container ' >
            <div className="v-left">
              <div className="image-container">
                <img src="./value.png" alt="" />
              </div>
            </div>

           {/* {right side} */}
          <div className='flexColStart v-right ' >
           <span className='orangeText text-one '    >Our Value</span>
           <span className='primaryText' >Value we give to you</span>
           <span  className='secondaryText'>
           We always ready to help by providijng the best services for you.
              <br/>
            We beleive a good blace to live can make your life better</span>
            <Accordion
            className='accordion'
             allOwMultipleExpanded={false}
             preExpanded={[0] }
             
             >
              
              {
              data.map((item, i) =>{
                  return(
                  <AccordionItem className={`accordionItem ${className} `} key={i} > 
                  <AccordionItemHeading>
                    <AccordionItemButton className=' flexCenter accordionButton'>
                     
                     <AccordionItemState>
                        {({expanded})=>
                         expanded 
                         ? setClassName("expanded") 
                         : setClassName("collasped")}
                     </AccordionItemState>

                       <div className=' flexCenter  flexCenter icon'>{item.icon}</div>
                     <span className='primaryText'>
                             {item.heading}
                      </span>
                      <div className='flexCenter icon' >
                          <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                  </AccordionItem>
                )
              })
              }

            </Accordion>
          </div>
     </div>
    </section>
    
  )
}

export default Value