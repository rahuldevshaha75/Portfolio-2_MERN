import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa6";

const Experience = () => {
    return (
        <>
            <div className="work" id="experience">
                <div className="container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center">Work Experiences</h2>
                    <hr/>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element-work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  red' }}
                        date="2011 - present"
                        iconStyle={{ background: 'green', color: '#fff' }}
                        icon={<FaReact />}>
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">XYZ Private Limited</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element-work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  red' }}
                        date="2011 - present"
                        iconStyle={{ background: 'green', color: '#fff' }}
                        icon={<FaReact />}>
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">XYZ Private Limited</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element-work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  red' }}
                        date="2011 - present"
                        iconStyle={{ background: 'green', color: '#fff' }}
                        icon={<FaReact />}>
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">XYZ Private Limited</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    );
};

export default Experience;