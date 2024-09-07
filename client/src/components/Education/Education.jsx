import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";


const Education = () => {
    return (
        <>
            <div className="education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center">Educations</h2>
                <hr/>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work eduStyle-0"
                    contentStyle={{ background:"#D6F2FC", color: 'black'}}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2010 - 2015"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Primary</h3>
                    <h4 className="vertical-timeline-element-subtitle">APS</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:"#D6F2FC", color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2016 - 2021"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">High School</h3>
                    <h4 className="vertical-timeline-element-subtitle">AHS</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:"#D6F2FC", color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2022 - 2024"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">College</h3>
                    <h4 className="vertical-timeline-element-subtitle">APBN</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background:"#D6F2FC", color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2024 - present"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">BSC</h3>
                    <h4 className="vertical-timeline-element-subtitle">AIUB</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </>
    );
};

export default Education;