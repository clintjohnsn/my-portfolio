import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";

export default function EducationSection(props) {
  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <h4>
          MSc Advanced Computer Science, Specialization in Artificial
          Intelligence
        </h4>
        <p>
          📍<strong>The University of Manchester</strong> | 📅09/2023-09/2024
        </p>
        <p>
          <i>
            💪 Machine Learning, Deep Learning, Reinforcement Learning, Natural
            Language Processing, System Governance
          </i>
        </p>
        <h4>
          Bachelor of Technology, Computer Science and Engineering, Minor in
          Mathematics
        </h4>
        <p>
          📍<strong>Shiv Nadar University</strong> | 📅05/2015-05/2019
        </p>
        <i>💪 Data Structures, Algorithms, Databases, OOPs</i>
      </Section>
    </Animation>
  );
}
