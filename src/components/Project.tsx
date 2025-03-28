import React from "react";
import gymMgt from '../assets/images/gymMgt.jpg';
import Fairmed from '../assets/images/Fairmed.jpg';
import ShalOps from '../assets/images/ShalOps (2).jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="https://demo.robifitness.com/" target="_blank" rel="noreferrer"><img src={gymMgt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://demo.robifitness.com/" target="_blank" rel="noreferrer"><h2>Gym Managment System</h2></a>
                <p>Designed, developed, and launched a Gym Managment system with inventory managment, memebers managment, finance managment, and more.</p>
            </div>
            <div className="project">
                <a href="https://robifitness.com/en" target="_blank" rel="noreferrer"><img src={ShalOps} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://robifitness.com/en" target="_blank" rel="noreferrer"><h2>Gym Website</h2></a>
                <p>Developed and maintained a gym webiste. You can find it at robifitness.com</p>
            </div>
            <div className="project">
                <a href="https://fair-med-publish-ziuo.vercel.app/" target="_blank" rel="noreferrer"><img src={Fairmed} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://fair-med-publish-ziuo.vercel.app/" target="_blank" rel="noreferrer"><h2>Fairmed</h2></a>
                <p>Developed and released a full functioning website. You can view this project at fair-med-publish-ziuo.vercel.app. </p>
            </div>
            
        
        </div>
    </div>
    );
}

export default Project;