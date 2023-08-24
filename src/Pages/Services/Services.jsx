import React, { useState } from 'react'
import Card1 from '../../Icons/Mask group (3).svg'
import WhiteCard1 from '../../Icons/Mask group (6).svg'
import WhiteCard2 from '../../Icons/Mask group (7).svg'
import WhiteCard3 from '../../Icons/Mask group (9).svg'
import WhiteCard4 from '../../Icons/Mask group (10).svg'
import Card2 from '../../Icons/Mask group (4).svg'
import Card3 from '../../Icons/Mask group (5).svg'
import Card4 from '../../Icons/digital-marketing 1 (1).svg'
import Line from '../../Icons/Line 2.svg'
import WhiteLine from '../../Icons/Line 2 (1).svg'
import "./Services.css"
const Services = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    return (
        <div className='Services'>
            <div className='Sub_services'>
                <div className='Full_service_txt'>
                    FULL SERVICE STUDIO
                </div>
                <div className='Services_txt'>
                    Services
                </div>
                <div className='Service_card_container'>
                    <div className='Service_card'onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div className='Service_card_logo'>
                        <img src={isHovered ? WhiteCard4 : Card1} alt="" style={{ width: 130 }} />
                        </div>
                        <div className='Service_card_txt_container'>
                            <div className='Service_card_txt'>
                            <img src={isHovered? WhiteLine:Line} alt="" />
                                <div className='Devloptxt'>
                                    DEVELOPMENT
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Service_card' onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        <div className='Service_card_logo'>
                        <img src={isHovered1 ? WhiteCard1 : Card2} alt="" style={{ width: 85 }} />
                        </div>
                        <div className='Service_card_txt_container'>
                            <div className='Service_card_txt'>
                            <img src={isHovered1? WhiteLine:Line} alt="" />
                                <div className='Devloptxt'>
                                    MARKETING
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Service_card'
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}>
                        <div className='Service_card_logo'>
                            <img src={isHovered2 ? WhiteCard3 : Card3} alt="" style={{ width: 90 }} />
                        </div>
                        <div className='Service_card_txt_container'>
                            <div className='Service_card_txt'>
                                <img src={isHovered2? WhiteLine:Line} alt="" />
                                <div className='Devloptxt'>
                                    BRANDING
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Service_card' onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}>
                        <div className='Service_card_logo'>
                        <img src={isHovered3 ? WhiteCard2 : Card4} alt="" style={{ width: 100 }} />
                        </div>
                        <div className='Service_card_txt_container'>
                            <div className='Service_card_txt'>
                            <img src={isHovered3? WhiteLine:Line} alt="" />
                                <div className='Devloptxt'>
                                    TRADING
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services