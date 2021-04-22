import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./Cards.scss"

const CardThree = () => {
  return (
    <div className="card" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="card-header">
        <h2 style={{ color: "#333333" }}>Imagerie Médicale</h2>
        <div className="img-card-container">
          <StaticImage
            src="../../images/cards/scanner.png"
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
              <span>- Radiologie</span>
            </li>
            <li>
              <span>- Echographie</span>
            </li>
            <li>
              <span>- Mammographie</span>
            </li>
            <li>
              <span>- Scanner</span>
            </li>
            <li>
              <span>- IRM</span>
            </li>
            <li>
              <span>- Radiothérapie</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardThree
