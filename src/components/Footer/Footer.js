import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer(){
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals!!
                </p>
                <p className="footer-subscription-text">
                    If you need help , send us info through your email.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your email..." 
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'> Submit </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> ABOUT US</h2>
                        <Link to='/'> How it work </Link>
                        <Link to='/'> Testimonials </Link>
                        <Link to='/'> Careers </Link>
                        <Link to='/'> Investor </Link>
                        <Link to='/'> Terms of Service </Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> CONTACT US </h2>
                        <Link to='/'> Contact  </Link>
                        <Link to='/'> Support </Link>
                        <Link to='/'> Destinations </Link>
                        <Link to='/'> Sponsorships </Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> VIDEOS </h2>
                        <Link to='/'> Submit video </Link>
                        <Link to='/'> Ambassadors </Link>
                        <Link to='/'> Agency </Link>
                        <Link to='/'> Influencer </Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> SOCIAL MEDIA </h2>
                        <Link to='/'> Instagram </Link>
                        <Link to='/'> Facebook </Link>
                        <Link to='/'> Youtube </Link>
                        <Link to='/'> Twitter </Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights"> TRVL @ 2022</small>
                    <div className="social icons">
                        <Link 
                            className="social-icon-link facebook" 
                            to='/' 
                            target='_blank'
                            aria-label="Facebook"
                        > 
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link 
                            className="social-icon-link instagram" 
                            to='/' 
                            target='_blank'
                            aria-label="instagram"
                        > 
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link 
                            className="social-icon-link youtube" 
                            to='/' 
                            target='_blank'
                            aria-label="youtube"
                        > 
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link 
                            className="social-icon-link twitter" 
                            to='/' 
                            target='_blank'
                            aria-label="twitter"
                        > 
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link 
                            className="social-icon-link linkedin" 
                            to='/' 
                            target='_blank'
                            aria-label="linkedin"
                        > 
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer