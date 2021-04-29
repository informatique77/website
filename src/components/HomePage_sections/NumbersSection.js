import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Number from "../Number/Number"

const NumbersSection = () => {
  return (
    <div className="numbers-section">
      <Number
        img={
          <StaticImage
            src="../../images/numbers/wallet-white.png"
            width={72}
            height={72}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Malette médicale"
            placeholder="blurred"
          />
        }
        number="16"
        text="Années d'expériences"
      />
            <Number
        img={
          <StaticImage
            src="../../images/numbers/doctor-white.png"
            width={72}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Un docteur"
            placeholder="blurred"
          />
        }
        number="19"
        text="Médecins spécialisés"
      />
            <Number
        img={
          <StaticImage
            src="../../images/numbers/center-white.png"
            width={72}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Un centre de consultations"
            placeholder="blurred"
          />
        }
        number="4"
        text="Centres médicaux modernes"
      />
            <Number
        img={
          <StaticImage
            src="../../images/numbers/write-white.png"
            width={72}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Une ordonance"
            placeholder="blurred"
          />
        }
        number="40"
        text="Consultations par ans"
      />
    </div>
  )
}

export default NumbersSection
