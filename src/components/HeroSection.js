import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'
import { BiPlay } from "react-icons/bi"

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src='.././videos/video-1.mp4' autoPlay loop muted />
            <h1>Company Awaits</h1>
            <p>What are you waiting for ? Apply Here</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'> 
                    SignUp  
                 </Button>
                 <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'> 
                    Watch Out <BiPlay/>
                 </Button>
            </div>
        </div>
    )
}

export default HeroSection
