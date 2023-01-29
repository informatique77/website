import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SliderComponent from "../SliderComponent/SliderComponent"
import IconButton from "../Buttons/IconButton"

const HomeHeader = () => {
  return (
    <div className="header">
      <div className="main-container">
        <SliderComponent />
        <p className="main-p">
          Nos centres de consultations et de téléconsultations vous accueillent
          sur la Côte d'Azur
        </p>
        <ul>
          <li>7 jours sur 7</li>
          <li>Week-ends et jours fériés inclus</li>
          <li>De 8h30 à 22h00</li>
          <li>Sans interruption</li>
        </ul>
        <div className="button-container">
          <IconButton
            css="button button__icon button__icon--blue"
            slug="/nos-centres"
            content="Trouver votre centre"
            staticImage={
              <StaticImage
                src="../../assets/images/icons/icon-position.png"
                width={24}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Map position"
                placeholder="blurred"
              />
            }
          />
          <IconButton
            css="button button__icon button__icon--red"
            slug="/teleconsultations"
            content="C7 Téléconsultations"
            staticImage={
              <StaticImage
                src="../../assets/images/icons/icon-camera.png"
                width={24}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Camera téléconsultations"
                placeholder="blurred"
              />
            }
          />
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
