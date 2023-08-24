import React from 'react'
import Left from '../../Icons/Mask group.svg'
import Right from "../../Icons/Mask group (1).svg"
import RightArrow from "../../Icons/Mask group (2).svg"
import "./Project.css"
const Project = () => {
    return (
        <div className='Project'>
            <div className='Card_changer'>
                <img src={Left} alt="" />
                <div className='Card'>
                    <div className='Image_container'>
                    </div>
                    <div className='Project_txt'>
                        <div className='Sub_Project_txt'>
                            <div className='Feature_txt'>
                                FEATURED PROJECT
                            </div>
                            <div className='Banking_txt'>
                                Banking App
                            </div>
                            <div className='Project_para_txt'>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              ullamco laboris nisi ut aliquip ex ea commodo
                                 consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident. Duis aute irure dolor in reprehenderit in
                                {/* <br />voluptate velit esse cillum dolore. */}
                            </div>
                            <div className='Horixontal_line'></div>
                            <div className='Live_site_cont'>
                                <div className='Live_txt'>LIVE SITE</div>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Right} alt="" />
            </div>
        </div>
    )
}

export default Project