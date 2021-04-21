import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Form from "../Form/Form"

const NewsLetterSection = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "white-stethoscope" }) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 96
            layout: FIXED
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
    <div className="newsLetter-section">
      <div className="newsLetter-text-logo">
        <div className="newsLetter-logo-container">
          <GatsbyImage image={image} alt="Newsletter Consultations 7 sur 7" />
        </div>
        <div className="newsLetter-text">
          <p>
            Inscrivez-vous à notre newsletter et restez informer des dernières
            actualités de Consultations 7 sur 7
          </p>
        </div>
      </div>
      <div className="newsLetter-form-container">
        <Form />
      </div>
    </div>
  )
}

export default NewsLetterSection
