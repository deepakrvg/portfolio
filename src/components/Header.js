import React from 'react'
import cv from '../assets/cv.pdf'

const Header = () => {
    return (
        <section className="container">
            <div className="main-content">
                <div className="center1">
                    <div className="subheading"><div className="home-left">Hello</div><div className="home-right">I am</div>
                    <div className="home-up">Full Stack Developer</div><hr className="leftline" /></div>
                    <div>Deepak Gupta</div>
                    <div className="subheading"><hr className="rightline" /><div className="home-down">Competitive Programmer</div></div>
                    <div className="link">
                        <a href={cv} download className="btn btn-primary">Download CV</a>
                        <a href="#portfolio" className="btn left">Portfolio</a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Header