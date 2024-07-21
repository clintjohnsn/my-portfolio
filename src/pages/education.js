import React from "react";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";

const EducationSection = (props) => {
  const educations = [
    {
      date: "2023 - 2024",
      university: "The University of Manchester",
      course:
        "MSc Advanced Computer Science, Specialization in Artificial Intelligence",
      description:
        "Machine Learning, Deep Learning, Reinforcement Learning, Natural Language Processing, System Governance",
    },
    {
      date: "2015 - 2019",
      university: "Shiv Nadar Univsersity",
      course:
        "Bachelor of Technology, Computer Science and Engineering, Minor in Mathematics",
      description:
        "Data Structures, Algorithms, Sofware Engineering, Linear Algebra, Probability and Statistics",
    },
  ];

  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <div className="education-section">
          {educations.map((exp, index) => (
            <div key={index} className="education-item">
              <div className="education-date">{exp.date}</div>
              <div className="education-details">
                <h3 className="university-name">{exp.university}</h3>
                <p className="course">{exp.course}</p>
                <p className="description-list">{exp.description}</p>
              </div>
            </div>
          ))}
          <style jsx>{`
            .education-section {
              max-width: 800px;
              margin: 0 0;
              padding: 0px;
            }
            .education-item {
              display: flex;
              margin-bottom: 30px;
            }
            .education-date {
              flex: 0 0 150px;
              font-weight: bold;
              padding-right: 20px;
            }
            .education-details {
              flex: 1;
            }
            .university-name {
              font-weight: bold;
              margin: 0 0 5px 0;
            }
            .course {
              font-style: italic;
              margin: 0 0 10px 0;
            }
            .description-list {
              margin: 0;
              padding-left: 20px;
            }
            @media (max-width: 600px) {
              .education-item {
                flex-direction: column;
              }
              .education-date {
                margin-bottom: 10px;
              }
            }
          `}</style>
        </div>
      </Section>
    </Animation>
  );
};

export default EducationSection;
