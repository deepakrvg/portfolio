import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'

const Contacts = () => {
    return (
        <section id="contact">
            <div className="contact__container">
                <a href="https://www.linkedin.com/in/deepak-gupta-68bb2321a" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/deepakrvg" target="_blank"><AiOutlineGithub /></a>
                <a href="mailto:guptadeepak0908@gmail.com"><CgMail /></a>
            </div>
        </section>
    )
}

export default Contacts