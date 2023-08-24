import React from 'react'
import Home from '../Home/Home'
import Project from '../Project/Project'
import "./Main.css"
import Services from '../Services/Services'
import About from '../About/About'
import Facts from '../Facts/Facts'
const Main = () => {
    return (
        // Main Container
        <div className='Container'>
            <Home />
            <Project />
            <Services/>
            <About/>
            <Facts/>
        </div>
    )
}

export default Main