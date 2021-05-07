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
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
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
  )
}

export default SliderComponent
