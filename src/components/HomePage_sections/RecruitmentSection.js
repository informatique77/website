import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SimpleButton from "../Buttons/SimpleButton"

const RecruitmentSection = () => {
  return (
    <>
      <div className="recruitment-section">
        <div className="recruitment-text">
          <span>Recrutement</span>
          <h2>Nos offres d'emplois</h2>
          <SimpleButton slug="/recrutement" content="Nous rejoindre" />
        </div>
        <StaticImage
          src="../../assets/images/shapes/centre-shapes.png"
          loading="eager"
          layout="fixed"
          width={183}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Recrutement C7 Santé"
          placeholder="blurred"
        />
      </div>
    </>
  )
}

export default RecruitmentSection
