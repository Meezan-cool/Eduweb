import React from 'react'
import './Facts.css'
import Line from '../../Icons/Line 2.svg'
const Facts = () => {
    return (
        <div className='Facts'>
            <div className='Sub_facts'>
                {/* Big Facts */}
                <div className='Facts_big'>
                    <div className='Big_txt'>Key Facts</div>
                    <div className='Big_num'>
                        75
                    </div>
                    <div className='Facts_big_txt'>
                        <img src={Line} alt="" />
                        <div>SUCCESSFUL PROJECTS</div>
                    </div>
                </div>
                {/* small Facts */}
                <div className='Facts_small'>
                    <div className='Right_Small_txt'>
                        Designed For Growth
                    </div>
                    <div className='Small_num'>
                        <div >
                            <div className='num1'>25 </div>
                            <div style={{position: 'relative',top: '8%'}}>
                                <img src={Line} alt="" style={{width:30}}/>
                                <div style={{color:'#000',fontWeight:'800'}}>EMPLOYEES </div>
                                </div>
                        </div>
                        <div >
                            <div className='num1'>05 </div>
                            <div style={{position: 'relative',top: '8%'}}>
                                <img src={Line} alt="" style={{width:30}}/>
                                <div style={{color:'#000',fontWeight:'800'}}>YEARS </div>
                                </div>
                        </div>
                        <div >
                            <div className='num1'>01 </div>
                            <div style={{position: 'relative',top: '8%'}}>
                                <img src={Line} alt="" style={{width:30}}/>
                                <div style={{color:'#000',fontWeight:'800'}}>LOCATION </div>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Facts