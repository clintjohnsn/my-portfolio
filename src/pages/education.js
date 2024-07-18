import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";

export default function EducationSection(props) {
  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <h2> education details</h2>
      </Section>
    </Animation>
  );
}
