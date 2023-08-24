import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className='Home'>
    {/* Navbar */}
 <div className='Nav_container'>
   <div className='Navbar'>
     <div className='Eduweb_txt'>
       EDUWEB TECHNOLOGIES
     </div>
     <div className='Menu_txt'>
       <li>HOME</li>
       <li>ABOUT</li>
       <li>SERVICES</li>
       <li>PROJECT</li>
       <li>TEAM</li>
       {/* <li>CLIENTS</li> */}
       <li>CONTACT</li>
     </div>
   </div>
 </div>

 {/* Body Part 1 */}
 <div className='Body_container'>
   <div className='Image_content'>
     {/* <img src={require('./Images/undraw_firmware_re_fgdy 1.png')} alt="" /> */}
     <img src={require('../../Images/undraw_firmware_re_fgdy 1.png')} alt="" />
   </div>
   <div className='Body_txt1'>
     <div className='Txt1'>We Design & Build</div>
     <div className='Txt1'>Creative Brands</div>
     <div className='Small_txt'>
       <div>Duis aute irure dolor reprehenderit</div>
      <div> voluptate velit esse dolore nulla pariatur</div>
       </div>
       <button>LEARN MORE</button>
   </div>
 </div>
 </div>
  )
}

export default Home