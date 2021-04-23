import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./Cards.scss"

const CardOne = () => {
  return (
    <div className="card" style={{ backgroundColor: "#0596de" }}>
      <div className="card-header">
        <h2 style={{ color: "#fff" }}>Nos horaires</h2>
        <div className="img-card-container">
          <StaticImage
            src="../../images/cards/time.png"
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
        <p style={{ color: "#fff" }}>
          <span className="span-underline big">Lundi au dimanche</span>
          <br></br>
          <span className="span-underline">Week-end inclus</span>
          <br></br>
          <br></br>
          <span className="span-underline big">8h30 - 22h00</span>
          <br></br>
          <span className="span-underline">Sans interruption</span>
        </p>
      </div>
    </div>
  )
}

export default CardOne
