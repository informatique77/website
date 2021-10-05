import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SliderComponent from "../SliderComponent/SliderComponent"
import IconButton from "../Buttons/IconButton"

const HomeHeader = () => {
  return (
    <div className="header">
      <div className="main-container">
        <h1>Centres Médicaux Azuréens</h1>
        <div className="title-img-container">
          <StaticImage
            src="../../assets/images/logo-consultations77.png"
            width={240}
            height={220}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Consultations 7 sur 7"
            placeholder="blurred"
          />
        </div>
        <div className="title-img-container">
          <StaticImage
            src="../../assets/images/title.png"
            width={620}
            height={75}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Titre Consultations 7 sur 7"
            placeholder="blurred"
          />
        </div>
        <SliderComponent />
        <p className="main-p">
          Nos centres de consultations et de téléconsultations vous accueillent
          sur la Côte d'Azur{" "}
          <span style={{ color: "#e74c3c" }}>7 jours sur 7</span>, week-ends et
          jours fériés inclus, sans rendez-vous, de <span>8h30 à 22h00</span>{" "}
          sans interruption.
        </p>
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
            content="Téléconsultations 7 sur 7"
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
