import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./Cards.scss"

const CardFour = () => {
  return (
    <div className="card" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="card-header">
        <h2 style={{ color: "#333333" }}>Laboratoires</h2>
        <div className="img-card-container">
          <StaticImage
            src="../../images/cards/bottle.png"
            loading="eager"
            width={52}
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
              <span>- Test covid</span>
            </li>
            <li>
              <span>- Biologie standard</span>
            </li>
            <li>
              <span>- Infectiologie</span>
            </li>
            <li>
              <span>- Orthoptiste</span>
            </li>
            <li>
              <span>- Parasitologie</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardFour
