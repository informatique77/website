import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import  SimpleButton  from "../Buttons/SimpleButton"

const RecruitmentSection = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "centre-shapes" }) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 183
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
    <>
      <div className="recruitment-section">
        <div className="recruitment-text">
          <span>Recrutement</span>
          <h2>Nos offres d'emplois</h2>
          <SimpleButton slug="/recrutement" content="Nous rejoindre" />
        </div>
        <GatsbyImage image={image} alt="Recrutement Consultations 7 sur 7" />
      </div>
    </>
  )
}

export default RecruitmentSection
