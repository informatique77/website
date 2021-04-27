import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./Cards.scss"

const CardFive = () => {
  return (
    <div className="card" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="card-header">
        <h2 style={{ color: "#333333" }}>Paramédicaux</h2>
        <div className="img-card-container">
          <StaticImage
            src="../../images/cards/paramedical.png"
            loading="eager"
            width={48}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Nos horaires"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="card-content">
        <div className="div-card">
          <ul>
            <li>
              <span>- Infirmiers</span>
            </li>
            <li>
              <span>- Ostéopathes</span>
            </li>
            <li>
              <span>- Kinésithérapeutes</span>
            </li>
            <li>
              <span>- Orthoptiste</span>
            </li>
            <li>
              <span>- Nutritionniste</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardFive