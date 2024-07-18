import React from "react";
import { ContactSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact" useTitleTemplate={true} noIndex={true} />
      <Page>
        <ContactSection sectionId="contact" heading="Contact Me!" />
      </Page>
    </>
  );
}
