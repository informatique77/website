import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import ExternalButton from "../components/Buttons/ExternalButton"
import BlueCircle from "../components/BlueCircle/BlueCircle"
import Seo from "../components/seo"

const Teleconsultation = () => (
  <Layout>
    <Seo title="Téléconsultations" />
    <PagesHeader
      title="Téléconsultations"
      description="Notre centre de téléconsultations ouvert de 9h à 21h, 7 jours sur 7, 
    vous permettra d'obtenir un avis médical ainsi qu'un diagnostic rapidement ainsi qu'en toute confidentialité"
      path="teleconsultations"
    />
    <div className="teleconsult-section">
      <ExternalButton
        css="button button__icon button__icon--red"
        slug="https://www.doctolib.fr/medecin-generaliste/nice/7-7-teleconsultations"
        content="Je prends rendez-vous"
        staticImage={
          <StaticImage
            src="../assets/images/icons/icon-camera.png"
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
            src="../assets/images/teleconsultations/teleconsult-1.jpg"
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
            src="../assets/images/teleconsultations/teleconsult-2.jpg"
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
                  src="../assets/images/teleconsultations/calendar.png"
                  alt="Calendrier"
                />
              </div>
              <span className="card-text-title">
                Je prends rendez-vous directement en ligne
              </span>
              <p className="card-text-paragraph">
                De 9h à 21h,{" "}
                <span style={{ color: "#e74c3c" }}>7 jours sur 7</span> y
                compris les jours fériés.
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
                  src="../assets/images/teleconsultations/chat-room.png"
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
                  src="../assets/images/teleconsultations/laptop-and-phone.png"
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
                  src="../assets/images/teleconsultations/credit-card.png"
                  alt="Carte de crédit"
                />
              </div>
              <span className="card-text-title">Je suis pris en charge</span>
              <p className="card-text-paragraph">
                La téléconsultation est directement prise en charge par
                l’Assurance Maladie.
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
                src="../assets/images/doctors/blue-stethoscope.png"
                alt="Stéthoscope"
              />
            </div>
            <div className="about-span">
              <span>Accéder rapidement à l’un de nos médecins</span>
            </div>
            <div className="about-text">
              <p>
                Notre service disponible{" "}
                <span style={{ color: "#e74c3c" }}>7 jours sur 7</span> de 9h à
                21h
              </p>
            </div>
          </div>
          <div className="about-two">
            <div className="about-img">
              <StaticImage
                width={40}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../assets/images/doctors/virus.png"
                alt="Virus"
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
                src="../assets/images/doctors/time.png"
                alt="Horloge"
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
          css="button button__icon button__icon--red"
          slug="https://www.doctolib.fr/medecin-generaliste/nice/7-7-teleconsultations"
          content="Je prends rendez-vous"
          staticImage={
            <StaticImage
              src="../assets/images/icons/icon-camera.png"
              width={24}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Camera téléconsultations"
              placeholder="blurred"
            />
          }
        />
      </div>
      <div className="blueCircles-container">
        <BlueCircle
          slug="/nos-centres"
          img={
            <StaticImage
              src="../assets/images/circle/white-center.png"
              alt="Nos centres"
              placeholder="blurred"
              width={40}
              quality={95}
            />
          }
          text="Nos centres"
        />
        <BlueCircle
          slug="/notre-metier"
          img={
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              quality={95}
              src="../assets/images/circle/white-wallet.png"
              alt="Note métier"
            />
          }
          text="Notre métier"
        />
        <BlueCircle
          slug="/nos-tarifs"
          img={
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              quality={95}
              src="../assets/images/circle/white-euro.png"
              alt="Nos tarifs"
            />
          }
          text="Nos tarifs"
        />
      </div>
    </div>
  </Layout>
)

export default Teleconsultation
