import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  Section,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Clint Johnson's Online Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="skills" heading="I build with" />
        <AboutSection sectionId="about" heading="About Me" />
        <Section sectionId="experience" heading="Experience" />
        <Section sectionId="education" heading="Education" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contact" heading="Contact" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        />
      </Page>
    </>
  );
}
