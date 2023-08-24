import React from 'react'
import "./About.css"
import RightArrow from "../../Icons/Mask group (2).svg"
import WhiteLine from '../../Icons/Line 2 (1).svg'
const About = () => {
    return (
        <div className='About'>
            <div className='Sub_about'>
                <div className='About_Left'>
                    <div className='About_first'>
                        THE STORY SO FAR
                    </div>
                    <div className='About_second'>
                        About Us
                    </div>
                    <div className='About_third'>
                        <div>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </div>
                        <div>
                            Duis aute irure dolor in quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore.
                        </div>
                        <div>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </div>
                    </div>
                    <img src={WhiteLine} alt="" />
                    <div className='About_contact'>
                        <div className='About_contact_txt'>CONTACT</div>
                        <img src={RightArrow} alt="" />
                        </div>
                </div>
                {/* <img src={require('../../Images/photo-1545670723-196ed0954986 2.png')} alt="" /> */}
                <div className='About_Right'>
                    <div className='About_img'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About