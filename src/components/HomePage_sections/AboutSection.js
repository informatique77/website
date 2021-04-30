import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SimpleButton from "../Buttons/SimpleButton"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "doctors/doctors.jpg" }) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 500
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 95
          )
        }
      }
    }
  `)
  const image = getImage(data.file.childImageSharp)
  return (
    <div className="about-section">
      <div className="about-img-container">
        <GatsbyImage image={image} alt="Notre équipe Consultations 7 sur 7" />
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
        <SimpleButton slug="/notre-metier" content="En savoir plus" />
      </div>
    </div>
  )
}

export default AboutSection
