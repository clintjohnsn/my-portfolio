import React, { useState, useEffect } from "react";
// import { GatsbyImage } from "gatsby-plugin-image";
import { Section, Animation } from "gatsby-theme-portfolio-minimal";

export default function ExperienceSection(props) {
  return (
    <Animation type="fadeUp">
      <Section anchor={props.sectionId} heading={props.heading}>
        <h4>Software development Engineer III (Tech Lead)</h4>
        <p>
          💼 ConvergeProsperity @ Deloitte | 📍Bangalore | 📅 11/2020-08/2023
        </p>
        <p>
          <li>Led a 4-member team in delivering key banking components</li>
          <li>
            Designed solution architectures using various modeling techniques
          </li>
          <li>
            Collaborated with product teams on requirements, planning and
            estimation
          </li>
          <li>Enhanced security and observability of microservices</li>
        </p>
        <p>
          <i>🔨 Kubernetes, AWS, Spring, Java, Python, Kafka, Datadog, Agile</i>
        </p>

        <h4>Software Engineer</h4>
        <p>💼 Dell Technologies | 📍Bangalore | 📅 01/2019-10/2020</p>
        <li>
          Created an automation for B2B purchase order monitoring and
          reconciliation
        </li>
        <li>
          Developed and maintained microservices for internal mobile
          applications
        </li>
        <li>
          Wrote test suites, performed code reviews, produced technical
          documentations
        </li>
        <p>
          <i>🔨 Docker, PCF, Spring, Java, Jenkins, TDD</i>
        </p>

        <h2>Volunteering</h2>
        <h4>Python Tutor</h4>
        <p>💼 Anumana Code Academy | 📍Manchester | 📅 11/2023-05/2024</p>
        <p>
          <i>💪 Mentorship</i>
        </p>
      </Section>
    </Animation>
  );
}
