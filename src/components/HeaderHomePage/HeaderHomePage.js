import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import IconButton from "../Buttons/IconButton"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./HeaderHomePage.scss"

const HomeHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  return (
    <div className="header">
      <div className="main-container">
        <h1>
          Consultations <span>7 sur 7</span>
        </h1>
        <Slider {...settings}>
          <a href="https://www.doctolib.fr/centre-de-sante/nice/vaccination-covid-19-7-7-consultations-nice?highlight%5Bspeciality_ids%5D%5B%5D=5494">
            <div className="carousel-container">
              <div className="img-container">
                <StaticImage
                  src="../../images/carousel/syringe.png"
                  width={92}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Vaccination Covid 19 Nice"
                  placeholder="blurred"
                />
              </div>
              <p className="text-carousel">Vaccination Covid 19</p>
            </div>
          </a>
          <Link to="/test-covid">
            <div className="carousel-container">
              <div className="img-container">
                <StaticImage
                  src="../../images/carousel/coronavirus.png"
                  width={92}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Test Codiv 19"
                  placeholder="blurred"
                />
              </div>
              <p className="text-carousel">Test Covid 19</p>
            </div>
          </Link>
          <Link to="/teleconsultations">
            <div className="carousel-container">
              <div className="img-container">
                <StaticImage
                  src="../../images/carousel/teleconsultations.png"
                  width={92}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Téléconsultations"
                  placeholder="blurred"
                />
              </div>
              <p className="text-carousel">Téléconsultations</p>
            </div>
          </Link>
        </Slider>
        <p className="main-p">
          Nos centres de consultations et de téléconsultations vous accueillent
          sur la Côte d'Azur <span style={{color:"#e74c3c"}}>7 jours sur 7</span>, week-ends et jours
          fériés inclus, sans rendez-vous, de <span>8h30 à 22h00</span> sans
          interruption.
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
