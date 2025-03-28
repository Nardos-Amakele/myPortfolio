import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS",
    "Flask",
    "Python",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Dart",
    "Flutter",
    "git",
    "github",
    "Bloc",
    "Riverpod",
];

const labelsThird = [
    "Regression",  
    "sklearn",  
    "NN",  
    "Vector DBs",  
    "AI Tools",  
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Proficiency</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Frontend Engineering</h3>
                        <p>
                            I've built and fine-tuned web apps using React and Next.js, making sure they look great and work smoothly.
                            I focus on creating user-friendly interfaces, handling state efficiently, and making everything run fast and responsive.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Technology Suite:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Mobile App Development</h3>
                        <p>
                            I build mobile apps that are smooth, fast, and user-friendly. From implementing intuitive UI to optimizing performance,
                            I focus on creating apps that feel great to use on Android.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Machine Learning and AI</h3>
                        <p>
                        I have worked with machine learning models in VS Code and Google Colab, experimenting with AI, data analysis, and optimization techniques to improve predictions and insights.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Technology Suite:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
