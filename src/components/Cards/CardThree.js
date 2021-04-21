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
        <p>
          Radiologie conventionnelle Echographie Mammographie numérique Scanner
          - IRM - Radiothérapie
          <br></br>
          <br></br>
          <a href="https://www.riviera-imagerie.fr/">
            Centre d’Imagerie Médicale : Nice Lamartime
          </a>
        </p>
      </div>
    </div>
  )
}

export default CardThree
