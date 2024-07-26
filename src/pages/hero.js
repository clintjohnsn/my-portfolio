import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation";
import { useCalendlyWidget } from "gatsby-theme-portfolio-minimal/src/hooks/useCalendlyWidget";
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section";
import { SocialProfiles } from "gatsby-theme-portfolio-minimal/src/components/SocialProfiles";

import { useLocalDataSource } from "gatsby-theme-portfolio-minimal/src/sections/Hero/data";
import * as classes from "gatsby-theme-portfolio-minimal/src/sections/Hero/style.module.css";
import { TypeAnimation } from "react-type-animation";

export default function Hero(props) {
  const response = useLocalDataSource();
  const data = response.allHeroJson.sections[0];

  const CalendlyWidget = useCalendlyWidget(data.calendly);

  return (
    <Animation type="fadeUp" delay={400}>
      {CalendlyWidget}
      <Section
        anchor={props.sectionId}
        additionalClasses={[classes.HeroContainer]}
      >
        {data.heroPhoto?.src && (
          <div className={classes.heroImageCont}>
            <GatsbyImage
              className={classes.heroImage}
              image={data.heroPhoto.src.childImageSharp.gatsbyImageData}
              alt={data.heroPhoto.alt || `Profile Image`}
              loading="eager"
            />
          </div>
        )}
        <div className={classes.Hero}>
          <div className={classes.Intro}>
            {data.intro && (
              <span className={classes.ImagePrefix}>{data.intro}</span>
            )}
            {data.image?.src && (
              <Animation
                className={classes.Image}
                type="waving-hand"
                duration={2500}
                iterationCount={100}
              >
                <GatsbyImage
                  image={data.image.src.childImageSharp.gatsbyImageData}
                  alt={data.image.alt || `Intro Image`}
                  loading="eager"
                />
              </Animation>
            )}
          </div>
          <h1 className={classes.Title}>{data.title}</h1>
          <h2 className={classes.Subtitle}>
            <TypeAnimation
              sequence={[
                "I build distributed systems that are reliable.",
                1000,
                "I build distributed systems that are observable.",
                1000,
                "I build distributed systems that are compliant.",
                1000,
                "I build distributed systems that are business-process driven.",
                1000,
              ]}
              speed={60}
              style={{ fontSize: "1.3rem", lineHeight: "1rem" }} //
              repeat={Infinity}
            />
          </h2>
          <p>{data.description}</p>
          <Animation type="fadeLeft" delay={600}>
            {data.socialProfiles && (
              <SocialProfiles
                from={data.socialProfiles.from}
                showIcon={data.socialProfiles.showIcons}
              />
            )}
          </Animation>
        </div>
        <style jsx>{``}</style>
      </Section>
    </Animation>
  );
}
