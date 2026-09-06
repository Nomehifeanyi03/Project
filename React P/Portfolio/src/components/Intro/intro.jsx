import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">CodLox</span> <br />website Developer</span>
            <p className="introPara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum <br /> quisquam illo ex, soluta est repudiandae.</p>
            <Link><button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
