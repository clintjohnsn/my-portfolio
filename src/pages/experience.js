import React from "react";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";

const ExperienceSection = (props) => {
  const experiences = [
    {
      date: "2020 - 2023",
      company: "Deloitte",
      position: "Software Engineer III (Tech Lead)",
      description: [
        "Led a 4-member team in delivering key cloud native banking components like card payments, accounts, onboarding and KYC.",
        "Designed event-driven solution architectures in collaboration with senior architects, product managers and vendors based on requirements.",
        "Developed components and internal tools to enhance security and observability of microservices.",
        "Practiced agile ceremonies like effort estimation, sprint planning and retrospectives.",
      ],
    },
    {
      date: "2019 - 2020",
      company: "Dell Technologies",
      position: "Software Engineer",
      description: [
        "Saved Dell over 125+ hours in manual labour building automations for B2B purchase order reconciliation.",
        "Developed Spring RESTful microservices using TDD for internal mobile applications.",
        "Wrote test suites, performed code reviews, produced technical documentations.",
      ],
    },
  ];

  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div className="experience-section">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">{exp.date}</div>
              <div className="experience-details">
                <h3 className="company-name">{exp.company}</h3>
                <p className="position">{exp.position}</p>
                <ul className="description-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <style jsx>{`
            .experience-section {
              max-width: 800px;
              margin: 0 0;
              padding: 0px;
            }
            .experience-item {
              display: flex;
              margin-bottom: 30px;
            }
            .experience-date {
              flex: 0 0 150px;
              font-weight: bold;
              padding-right: 20px;
            }
            .experience-details {
              flex: 1;
            }
            .company-name {
              font-weight: bold;
              margin: 0 0 5px 0;
            }
            .position {
              font-style: italic;
              margin: 0 0 10px 0;
            }
            .description-list {
              margin: 0;
              padding-left: 20px;
            }
            @media (max-width: 600px) {
              .experience-item {
                flex-direction: column;
              }
              .experience-date {
                margin-bottom: 10px;
              }
            }
          `}</style>
        </div>
      </Section>
    </Animation>
  );
};

export default ExperienceSection;
