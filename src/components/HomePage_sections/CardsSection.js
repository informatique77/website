import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Card from "../Card/Card"

const CardsSection = ({ arr }) => {
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
            <p>
              <span className="card__content--underline card__content__big">Lundi au dimanche</span>
              <br></br>
              <span className="card__content--underline">Week-end inclus</span>
              <br></br>
              <br></br>
              <span className="card__content--underline big">8h30 - 22h00</span>
              <br></br>
              <span className="card__content--underline">Sans interruption</span>
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
            <ul>
              {arr[0].list_one.map((data, index) => {
                return data !== "Vaccination Covid" ? <li key={index}>- {data}</li> : 
                <li key={index}>  
                <a
                  href="https://www.doctolib.fr/centre-de-sante/nice/vaccination-covid-19-7-7-consultations-nice?highlight%5Bspeciality_ids%5D%5B%5D=5494"
                  className="card__content__red-link"
                >
                  - {data}
                  <StaticImage
                    src="../../images/icons/icon-red-link.png"
                    loading="eager"
                    width={16}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Lien Hypertexte"
                    placeholder="blurred"
                  />
                </a></li>
              })}
            </ul>
          }
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
            <ul>
              <li>
                - Radiologie
              </li>
              <li>
                - Echographie
              </li>
              <li>
                - Mammographie
              </li>
              <li>
                - Scanner
              </li>
              <li>
                - IRM
              </li>
              <li>
                - Radiothérapie
              </li>
            </ul>
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
            <ul>
              <li>
                - Tests covids
              </li>
              <li>
                - Biologie standard
              </li>
              <li>
                - Infectiologie
              </li>
              <li>
                - Parasitologie
              </li>
            </ul>
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
            <ul>
              <li>
                - Infirmiers
              </li>
              <li>
                - Ostéopathes
              </li>
              <li>
                - Kinésithérapeutes
              </li>
              <li>
                - Orthoptiste
              </li>
              <li>
                - Nutritionniste
              </li>
            </ul>
          }
          blue={false}
        />
      </div>
    </div>
  )
}

export default CardsSection
