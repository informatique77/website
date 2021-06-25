import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SliderComponent from "../SliderComponent/SliderComponent"
import IconButton from "../Buttons/IconButton"

import "./HeaderHomePage.scss"

const HomeHeader = () => {
  return (
    <div className="header">
      <div className="main-container">
        <h1>Centres Médicaux Azuréens</h1>
        <div className="title-img-container">
          <StaticImage
            src="../../images/title-C7.png"
            width={280}
            height={260}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Camera téléconsultations"
            placeholder="blurred"
          />
        </div>
        {/* <h1>
          Consultations <span>7 sur 7</span>
        </h1> */}
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
            css="icon-button"
            slug="/nos-centres"
            content="Trouver votre centre"
            staticImage={
              <StaticImage
                src="../../images/icons/icon-position.png"
                width={24}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Map position"
                placeholder="blurred"
              />
            }
          />
          <IconButton
            css="icon-button red"
            slug="/teleconsultations"
            content="Téléconsultations 7 sur 7"
            staticImage={
              <StaticImage
                src="../../images/icons/icon-camera.png"
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
