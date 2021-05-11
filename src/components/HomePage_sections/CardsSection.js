import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Card from "../Card/Card"

import "../../styles/HomePage_sections.scss"

const CardsSection = () => {
  return (
    <div className="cards-sections">
      <div className="cards-section-one">
        <Card
          title="Nos horaires"
          img={
            <StaticImage
              src="../../images/cards/time.png"
              loading="eager"
              width={48}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Nos horaires"
              placeholder="blurred"
            />
          }
          content={
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
          }
          blue={true}
        />
        <Card
          title="Nos consultations"
          img={
            <StaticImage
              src="../../images/cards/write.png"
              loading="eager"
              width={48}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Nos horaires"
              placeholder="blurred"
            />
          }
          content={
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
                      alt="Lien Hypertexte"
                      placeholder="blurred"
                    />
                  </a>
                </li>
              </ul>
            </div>
          }
          blue={false}
        />
      </div>
      <div className="cards-section-two">
        <Card
          title="Imagerie Médicale"
          img={
            <StaticImage
              src="../../images/cards/scanner.png"
              loading="eager"
              width={48}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Nos horaires"
              placeholder="blurred"
            />
          }
          content={
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
          }
          blue={false}
        />
        <Card
          title="Laboratoires"
          img={
            <StaticImage
              src="../../images/cards/bottle.png"
              loading="eager"
              width={52}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Nos horaires"
              placeholder="blurred"
            />
          }
          content={
            <div className="div-card">
              <ul>
                <li>
                  <span>- Tests covids</span>
                </li>
                <li>
                  <span>- Biologie standard</span>
                </li>
                <li>
                  <span>- Infectiologie</span>
                </li>
                <li>
                  <span>- Parasitologie</span>
                </li>
              </ul>
            </div>
          }
          blue={false}
        />
        <Card
          title="Paramédicaux"
          img={
            <StaticImage
              src="../../images/cards/paramedical.png"
              loading="eager"
              width={48}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Nos horaires"
              placeholder="blurred"
            />
          }
          content={
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
          }
          blue={false}
        />
      </div>
    </div>
  )
}

export default CardsSection
