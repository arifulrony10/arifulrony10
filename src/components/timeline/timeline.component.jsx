import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import icddrbLogo from '../../assets/icons/icddrb.svg';
import waltonLogo from '../../assets/icons/walton.svg';
import kloudoopLogo from '../../assets/icons/kloudoop.svg';
import aiubLogo from '../../assets/icons/aiub.svg';
import cambrianLogo from '../../assets/icons/cambrian.svg';
import projectcodeLogo from '../../assets/icons/projectcodeLogo.svg';

const TimelineComponent = () => {
  return (
    <div>
      {/* EXPERIENCE */}
      <h3 className="text-center my-4 text-muted fs-2 fw-bold">
        - Experience -
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2013"
          iconStyle={{ background: '#EA8923', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <div className="d-md-flex">
            <img src={icddrbLogo} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">
                Senior Data Management Assistant
              </h3>
              <a
                href="https://icddrb.org"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                Research Administration, icddr,b
              </a>
            </div>
          </div>

          <p className="fw-normal">
            icddr,b is a global health research institute in Dhaka, Bangladesh,
            dedicated to innovative scientific research to solve public health
            challenges through various methodologies.
          </p>
          <ul>
            <li>
              Review and follow up on protocol applications, ensuring
              completeness.
            </li>
            <li>Assist in evaluating and approving protocols for the IRB.</li>
            <li>Proactively enter protocol data and generate reports.</li>
            <li>Support funding opportunity search and summary.</li>
            <li>Maintain proposal database and provide reports.</li>
            <li>
              Track ERP actions and provide support throughout its phases.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2022"
          iconStyle={{ background: '#13489E', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <div className="d-md-flex">
            <img src={waltonLogo} alt="" className="mr-md-2" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">Intern</h3>
              <a
                href="https://www.waltonhil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                Software Development Team-IT, Walton Hi-Tech Industries PLC
              </a>
            </div>
          </div>
          <p className="fw-normal">
            Walton is one of the largest industries in Bangladesh. They have
            over a hundred outlets across the country. Moreover, there are
            different types of outlets. So, build a solution for the customer,
            using which one can easily locate the nearest desired type of
            outlet.
          </p>
          <ul>
            <li>Recreate an solution for locating nearest outlet.</li>
            <li>Work with the UI/UX team to make it pixel perfect.</li>
            <li>Optimized for better performance.</li>
            <li>Merger data from multiple database sources.</li>
            <li>Build RESTful API for Walton Plaza.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2021"
          iconStyle={{ background: '#47C2ED', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <div className="d-md-flex">
            <img src={kloudoopLogo} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">
                Director of Technology
              </h3>
              <a
                href="https://www.kloudoop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                Kloudoop Limited
              </a>
            </div>
          </div>
          <p className="fw-normal"></p>
          <ul>
            <li>
              Overseeing and evaluating all technological activities in
              accordance with established objectives.
            </li>
            <li>
              Coming up with and implementing IT policies and systems to support
              the execution of strategies decided upon by the management.
            </li>
            <li>
              Examining the business demands of all departments to identify
              their technology requirements.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* EDUCATION */}
      <h3 className="text-center my-4 text-muted fs-2 fw-bold">
        - Education -
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 (On Going)"
          iconStyle={{ background: '#c432c5', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <div className="d-md-flex">
            <img src={projectcodeLogo} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">Project Code</h3>
              <a
                href="https://projectcode.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                Project Code is the first international coding bootcamp in
                Bangladesh and is an exclusive joint venture of Digital Bridge
                and Codeworks, Europe's #1 coding bootcamp.
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: '#034EA1', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <div className="d-md-flex">
            <img src={aiubLogo} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">BSc in CSE</h3>
              <a
                href="https://www.aiub.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                American International University-Bangladesh (AIUB)
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: '#FF0000', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <div className="d-md-flex">
            <img src={cambrianLogo} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">H.S.C</h3>
              <a
                href="https://www.cambrian.edu.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                Cambrian School and College
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: '#FF0000', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <div className="d-md-flex">
            <img src={cambrianLogo} alt="" />
            <div className="d-flex flex-column justify-content-center align-items-canter">
              <h3 className="vertical-timeline-element-title">S.S.C</h3>
              <a
                href="https://www.cambrian.edu.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="vertical-timeline-element-subtitle text-decoration-none text-muted fs-6"
              >
                Cambrian School and College
              </a>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default TimelineComponent;
