import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import './HeroSection.css'
import '../../App.css'

function HeroSection(){
    const [video,setVideo] = useState(1)
    const [bgStatus, setBgStatus] = useState('Dynamic')
    const [bgImage, setBgImage] = useState(1)

    useEffect(() => {
        setInterval(()=> {
            video === 1 ? setVideo(2) : setVideo(1)
        }, 60000)
    },[video])

    const handleBgStatus = () => {
        if(bgStatus === 'Dynamic'){
            setBgImage((Math.floor(Math.random() * 9) + 1))
            setBgStatus('Static')
        }
        else setBgStatus('Dynamic')
    }

    return (
        <div className="hero-container">
            {   bgStatus === 'Dynamic' 
                ? <video src={`../../videos/video${video}.mp4`} autoPlay loop muted/> 
                : <img src={`../../images/img-${bgImage}.jpg`} alt="Background image"/>}
            <h1> ADVENTURE AWAITS </h1>
            <p> What are you waiting for? </p>
            <div className="hero-btns">
                <Button className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                > 
                GET STARTED
                </Button>
                <Button className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                > 
                WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
                <Button  buttonStyle='btn--outline' onClick={handleBgStatus}>
                    {bgStatus === 'Dynamic' ? 'Static background' : 'Dynamic background'}
                </Button>
            </div>
        </div>
    )
}

export default HeroSection