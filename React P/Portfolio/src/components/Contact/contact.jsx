import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import YouTubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"


const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid pariatur 
                placeat quos totam tempora. A explicabo perspiciatis
            </p>client
            <div className="clientImgs">
                <img src={Walmart} alt="client" className="clientImg" />
                <img src={Adobe} alt="client" className="clientImg" />
                <img src={Microsoft} alt="client" className="clientImg" />
                <img src={Facebook} alt="client" className="clientImg" />
            </div>
        </div>

        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quisquam? Quis!</span>
            <form className='contactForm'>
                <input type="text" className='name' placeholder='Your Name' />
                <input type="email" className='email' placeholder='Your Email' />
                <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="twitter" className="link" />
                    <img src={YouTubeIcon} alt="youtube" className="link" />
                    <img src={InstagramIcon} alt="instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
