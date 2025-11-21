import React from "react";
import gymMgt from '../assets/images/gymMgt.jpg';
import Fairmed from '../assets/images/Fairmed.jpg';
import ShalOps from '../assets/images/ShalOps (2).jpg';
import Maven from '../assets/images/Maven.png';
import Marketing from '../assets/images/ShalOps.png';
import ShapeUp from '../assets/images/ShapeUp.png';
import Demo from '../assets/images/Demo.png';
import Magna from '../assets/images/Magna.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://www.shalops.com/" target="_blank" rel="noreferrer"><img src={Marketing} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.shalops.com/" target="_blank" rel="noreferrer"><h2>ShalOps Website</h2></a>
                    <p>Developed a company website for company marketing.</p>
                </div>

                <div className="project">
                    <a href="https://shapeupsportzone.com/en" target="_blank" rel="noreferrer"><img src={ShapeUp} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://shapeupsportzone.com/en" target="_blank" rel="noreferrer"><h2>Shape Up Gym</h2></a>
                    <p>Developed and maintained a gym webiste. Additionaly, designed, developed, and launched a Gym Managment system with inventory managment, memebers managment, finance managment, and more.</p>
                </div>
                
                 <div className="project">
                    <a href="https://www.magnaplc.com/" target="_blank" rel="noreferrer"><img src={Magna} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.magnaplc.com/" target="_blank" rel="noreferrer"><h2>Magna Website</h2></a>
                    <p>Developed a company website for company marketing as an employee for ShalOps.</p>
                </div>

                <div className="project">
                    <a href="https://mavenmd.vercel.app/" target="_blank" rel="noreferrer"><img src={Maven} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://mavenmd.vercel.app/" target="_blank" rel="noreferrer"><h2>MavenMD</h2></a>
                    <p>Implemented designes and frontend development for a company specific website.</p>
                </div>

                <div className="project">
                    <a href="https://demo.robifitness.com/" target="_blank" rel="noreferrer"><img src={Demo} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://demo.robifitness.com/" target="_blank" rel="noreferrer"><h2>Gym Managment System</h2></a>
                    <p>Designed, developed, and launched a Gym Managment system with inventory managment, memebers managment, finance managment, and more.</p>
                </div>

                <div className="project">
                    <a href="https://robifitness.com/en" target="_blank" rel="noreferrer"><img src={ShalOps} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://robifitness.com/en" target="_blank" rel="noreferrer"><h2>Gym Website</h2></a>
                    <p>Developed and maintained a gym webiste. You can find it at robifitness.com</p>
                </div>

                <div className="project">
                    <a href="https://fair-med-publish-ziuo.vercel.app/" target="_blank" rel="noreferrer"><img src={Fairmed} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://fair-med-publish-ziuo.vercel.app/" target="_blank" rel="noreferrer"><h2>Fairmed</h2></a>
                    <p>Developed and released a full functioning website. You can view this project at fair-med-publish-ziuo.vercel.app. </p>
                </div>

            </div>
        </div>
    );
}

export default Project;