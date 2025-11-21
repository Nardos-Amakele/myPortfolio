import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Maven Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Front End Developer (Remote)</h3>
            <h4 className="vertical-timeline-element-subtitle">Maven Tech — Remote</h4>
            <p>
              Develop responsive user interfaces using React, Next.js, TypeScript, and Tailwind CSS.
              Implement REST integrations using RTK Query for data fetching and caching. 
              Collaborate on UI/UX enhancements, working with Figma to adjust layouts and ensure 
              modern and accessible user experiences across devices.
            </p>
          </VerticalTimelineElement>

          {/* ShalOps */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer & Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">ShalOps Digital Solutions PLC — Addis Ababa, Ethiopia</h4>
            <p>
              Built secure REST APIs using Express.js, PostgreSQL, and Prisma with full authentication and CRUD operations 
              for inventory systems. Developed optimized React components with smooth UI transitions using Framer Motion.
              Led project execution through planning, team coordination, and system deployment.
            </p>
          </VerticalTimelineElement>

          {/* iCog Labs (Moved one step up) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 – Oct 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Artificial General Intelligence Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">iCog Labs — Addis Ababa, Ethiopia</h4>
            <p>
              Worked on symbolic AI and machine learning models, building prototypes and optimizing algorithms 
              to improve performance for intelligent systems. Contributed to a MeTTa Lang extension and assisted 
              in designing more accurate data interpretation algorithms used in AGI research.
            </p>
          </VerticalTimelineElement>

          {/* CodSoft */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 – July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">CodSoft — Remote</h4>
            <p>
              Built dynamic and scalable web pages using React, TypeScript, and Tailwind. 
              Troubleshot and optimized front-end performance, used Git/GitHub for collaboration, 
              and implemented a simple backend using FastAPI for handling API interactions.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
