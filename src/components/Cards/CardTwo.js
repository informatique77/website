import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./Cards.scss"

const CardOne = () => {
  return (
    <div className="card" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="card-header">
        <h2 style={{ color: "#333333" }}>Nos consultations</h2>
        <div className="img-card-container">
          <StaticImage
            src="../../images/cards/write.png"
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
          <span>Adultes et enfants</span>
          <br></br> Médecine :
          <ul>
            <li>
              <span>- Générale</span>
            </li>
            <li>
              <span>- Pédiatrique</span>
            </li>
            <li>
              <span>- D’urgence</span>
            </li>
            <li>
              <span>- Traumatologie</span>
            </li>
            <li>
              <span>- Gérontologie</span>
            </li>
            <li>
              <a
                href="https://www.doctolib.fr/centre-de-sante/nice/vaccination-covid-19-7-7-consultations-nice?highlight%5Bspeciality_ids%5D%5B%5D=5494"
                className="red-link"
              >
                - Vaccination Covid
                <StaticImage
                  src="../../images/icons/icon-red-link.png"
                  loading="eager"
                  width={16}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Nos horaires"
                  placeholder="blurred"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardOne
