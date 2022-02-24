import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SimpleButton from "../Buttons/SimpleButton"

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-img-container">
        <StaticImage
          src="../../assets/images/ourJobs/hp-notre-equipe.jpg"
          loading="eager"
          layout="constrained"
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Notre équipe Consultations 7 sur 7"
          placeholder="blurred"
        />
      </div>
      <div className="about-text-container">
        <span>À propos</span>
        <h2>
          Une équipe de médecins disponible <span>7 jours sur 7</span>
        </h2>
        <p className="about-first-text">
          Depuis 2005, une équipe de médecins généralistes et urgentistes est à
          votre disposition afin de répondre aux besoins et aux attentes des
          patients.
        </p>
        <SimpleButton slug="/a-propos" content="En savoir plus" />
      </div>
    </div>
  )
}

export default AboutSection
