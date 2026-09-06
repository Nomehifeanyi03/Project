import React from 'react'
import "./skills.css"
import UIDesign from '../../assets/ui-design.png'
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione pariatur, impedit id sequi quam animi libero praesentium veritatis ad, distinctio sit. Nisi asperiores vero voluptatibus. Totam illum, neque nisi fugiat obcaecati saepe quas exercitationem dignissimos iusto natus quos magnam.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, optio?</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, optio?</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, optio?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
