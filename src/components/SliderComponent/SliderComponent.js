import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings}>
        <div className="carousel-container">
          <Link to="a-propos" className="img-container">
            <StaticImage
              src="../../assets/images/carousel/home.jpg"
              quality={100}
                 style={{
                  margin: '0 auto',
                }}
              layout="constrained"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Centre Médical Nice l'Ariane"
              placeholder="blurred"
            />

          </Link>
        </div>
        <div className="carousel-container">
          <div className="img-container">
            <StaticImage
              src="../../assets/images/carousel/vaccination.jpg"
              quality={100}
                 style={{
                  margin: '0 auto',
                }}
              layout="constrained"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Vaccination Covid 19 Nice"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="carousel-container">
          <div className="img-container">
            <StaticImage
              src="../../assets/images/carousel/covid.jpg"
              quality={100}
                 style={{
                  margin: '0 auto',
                }}
              layout="constrained"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Test Codiv 19"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="carousel-container">
          <div className="img-container">
            <StaticImage
              src="../../assets/images/carousel/teleconsult.jpg"
              quality={100}
                 style={{
                  margin: '0 auto',
                }}
              layout="constrained"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Téléconsultations"
              placeholder="blurred"
            />
          </div>
        </div>
    </Slider>
  )
}

export default SliderComponent
