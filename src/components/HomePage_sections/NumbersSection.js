import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Number from "../Number/Number"

const NumbersSectionOne = () => {
  return (
    <div className="numbers-section">
      <div className="section-one">
        <Number
          img={
            <StaticImage
              src="../../assets/images/numbers/wallet-white.png"
              width={72}
              height={72}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Malette médicale"
              placeholder="blurred"
            />
          }
          number="19"
          text="Années d'expérience"
        />
        <Number
          img={
            <StaticImage
              src="../../assets/images/numbers/doctor-white.png"
              width={72}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Un docteur"
              placeholder="blurred"
            />
          }
          number="60"
          text="Collaborateurs"
        />
        <Number
          img={
            <StaticImage
              src="../../assets/images/numbers/center-white.png"
              width={72}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Un centre de consultations"
              placeholder="blurred"
            />
          }
          number="8"
          text="Centres médicaux"
        />
      </div>
      <div className="section-two">
        <Number
          img={
            <StaticImage
              src="../../assets/images/numbers/bulldozer.png"
              width={72}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Un bulldozer"
              placeholder="blurred"
            />
          }
          number="4"
          text="Nouveaux centres à venir"
        />
        <Number
          img={
            <StaticImage
              src="../../assets/images/numbers/camera.png"
              width={72}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Une caméra"
              placeholder="blurred"
            />
          }
          number="150"
          text="Téléconsultations par an"
        />
        <Number
          img={
            <StaticImage
              src="../../assets/images/numbers/write-white.png"
              width={72}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Une ordonance"
              placeholder="blurred"
            />
          }
          number="100"
          text="Consultations par an"
        />
      </div>
    </div>
  )
}

export default NumbersSectionOne
