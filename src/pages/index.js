import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  Section,
  InterestsSection,
  Page,
  // ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import EducationSection from "./education.js";
import ExperienceSection from "./experience.js";

export default function IndexPage() {
  return (
    <>
      <Seo title="Clint Johnson's Online Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="skills" heading="I build with" />
        <ExperienceSection sectionId="experience" heading="Experience" />
        <EducationSection sectionId="education" heading="Education" />
        <AboutSection sectionId="about" heading="About Me" />
        {/* <ProjectsSection sectionId="projects" heading="Projects" /> */}
        {/* <ContactSection sectionId="contact" heading="Contact" /> */}
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["blog"]}
        /> */}
      </Page>
    </>
  );
}
