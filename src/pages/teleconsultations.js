import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import ExternalButton from "../components/Buttons/ExternalButton"
import BlueCirclesContainer from "../components/BlueCircle/BlueCirclesContainer"
import SEO from "../components/seo"

import "../styles/Teleconsultations.scss"

const Teleconsultation = () => (
  <Layout>
    <SEO title="Téléconsultations" />
    <PagesHeader title="Téléconsultations" />
    <div className="teleconsult-section">
      <ExternalButton
        css="icon-button red"
        slug="https://www.doctolib.fr/medecin-generaliste/nice/7-7-teleconsultations"
        content="Prendre rendez-vous"
        staticImage={
          <StaticImage
            src="../images/icons/icon-camera.png"
            width={24}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Camera téléconsultations"
            placeholder="blurred"
          />
        }
      />
      <div className="teleconsult-top">
        <div className="teleconsult-img-1">
          <StaticImage
            width={350}
            height={197}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="blurred"
            src="../images/teleconsultations/teleconsult-1.jpg"
            alt="Personne âgée en téléconsultation"
          />
        </div>
        <div className="teleconsult-img-2">
          <StaticImage
            width={350}
            height={197}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="blurred"
            src="../images/teleconsultations/teleconsult-2.jpg"
            alt="Mère de famille en téléconsultation avec son bébé"
          />
        </div>
      </div>
      <div className="teleconsult-midle">
        <h2>Déroulement d'une téléconsultation</h2>
        <div className="midle-content">
          <div className="midle-one">
            <div className="teleconsult-card">
              <div>
                <StaticImage
                  width={36}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="blurred"
                  src="../images/teleconsultations/calendar.png"
                  alt="Calendrier"
                />
              </div>
              <span className="card-text-title">
                Je prends rendez-vous directement en ligne
              </span>
              <p className="card-text-paragraph">
                De 9h à 21h, 7 jours sur 7 y compris les jours fériés.
              </p>
            </div>
            <div className="teleconsult-card">
              {" "}
              <div>
                <StaticImage
                  width={36}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="blurred"
                  src="../images/teleconsultations/chat-room.png"
                  alt="Bulle de discussion"
                />
              </div>
              <span className="card-text-title">J'obtiens un avis médical</span>
              <p className="card-text-paragraph">
                Je bénéficie d'un diagnostic ainsi qu'une ordonnance valable en
                pharmacie.
              </p>
            </div>
          </div>
          <div className="midle-two">
            <div className="teleconsult-card">
              {" "}
              <div>
                <StaticImage
                  width={36}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="blurred"
                  src="../images/teleconsultations/laptop-and-phone.png"
                  alt="Ordinateur et téléphone"
                />
              </div>
              <span className="card-text-title">
                J'effectue ma téléconsultation
              </span>
              <p className="card-text-paragraph">
                Depuis mon téléphone ou mon ordinateur, je réalise ma
                téléconsultation en toute confidentialité.
              </p>
            </div>
            <div className="teleconsult-card">
              {" "}
              <div>
                <StaticImage
                  width={36}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="blurred"
                  src="../images/teleconsultations/credit-card.png"
                  alt="Carte de crédit"
                />
              </div>
              <span className="card-text-title">Je suis pris en charge</span>
              <p className="card-text-paragraph">
                La téléconsultation est directement pris en charge par l’Assurance Maladie.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="teleconsult-bottom">
        <div className="teleconsult-about">
          <div className="about-one">
            <div className="about-img">
              <StaticImage
                width={36}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../images/doctors/blue-stethoscope.png"
                alt="Notre équipe"
              />
            </div>
            <div className="about-span">
              <span>Accéder rapidement à l’un de nos médecins</span>
            </div>
            <div className="about-text">
              <p>Notre service disponible 7 jours sur 7 de 9h à 21h</p>
            </div>
          </div>
          <div className="about-two">
            <div className="about-img">
              <StaticImage
                width={40}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../images/doctors/virus.png"
                alt="Notre équipe"
              />
            </div>
            <div className="about-span">
              <span>Une solution idéale face au COVID-19</span>
            </div>
            <div className="about-text">
              <p>
                Évitez le contact avec d’autres personnes tout en continuant à
                vous soigner
              </p>
            </div>
          </div>
          <div className="about-three">
            <div className="about-img">
              <StaticImage
                width={30}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../images/doctors/time.png"
                alt="Notre équipe"
              />
            </div>
            <div className="about-span">
              <span>Gain de temps</span>
            </div>
            <div className="about-text">
              <p>En consultant nos Médecins directement de votre domicile</p>
            </div>
          </div>
        </div>
        <ExternalButton
          css="icon-button red"
          slug="https://www.doctolib.fr/medecin-generaliste/nice/7-7-teleconsultations"
          content="Prendre rendez-vous"
          staticImage={
            <StaticImage
              src="../images/icons/icon-camera.png"
              width={24}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Camera téléconsultations"
              placeholder="blurred"
            />
          }
        />
      </div>
      <BlueCirclesContainer />
    </div>
  </Layout>
)

export default Teleconsultation
