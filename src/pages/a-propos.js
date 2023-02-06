import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SimpleButton from "../components/Buttons/SimpleButton"
import Seo from "../components/seo"

const OurJob = () => {
  return (
    <Layout>
      <Seo
        title="Qui sommes nous ?"
        description="Chez C7 Santé, notre métier c'est de vous proposer des consultations pour adultes et enfants, sans rendez-vous, 
      avec la possibilité d'effectuer des examens complémentaires pouvant être réalisé sur place"
        path="notre-metier"
      />
      <div className="our-job-header">
        <h1>Notre métier</h1>
      </div>
      <div className="ourTeam-resume">
        <p>
          Nous effectuons des consultations sans rendez-vous
          <span style={{ color: "#e74c3c" }}> pour vous prendre en charge.</span>
        </p>
        <br></br>
        <p>
          Si besoin, nous pouvons nous proposer d'effectuer
          des <span style={{ color: "#e74c3c" }}>examens d'imagerie médicale</span> ou de
          <span style={{ color: "#e74c3c" }}> biologie médicale</span> pouvant être réalisé sur place.
        </p>
      </div>
      <div className="cp-specialities">
        <div className="row">
          <div className="speciality">
            <span>Médecine Générale</span>
            <div className="our-job-img-container">
              <StaticImage
                src="../assets/images/icons/icon-glass-pink.png"
                width={200}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Camera téléconsultations"
                placeholder="blurred"
              />
            </div>
          </div>
          <div className="speciality">
            <span>Médecine d'urgence</span>
            <div className="our-job-img-container">
              <StaticImage
                src="../assets/images/icons/icon-drop-blue.png"
                width={200}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Camera téléconsultations"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="speciality">
            <span>Pédiatrie</span>
            <div className="our-job-img-container">
              <StaticImage
                src="../assets/images/icons/icon-bottle-blue.png"
                width={200}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Camera téléconsultations"
                placeholder="blurred"
              />
            </div>
          </div>
          <div className="speciality">
            <span>Entorse et fracture</span>
            <div className="our-job-img-container">
              <StaticImage
                src="../assets/images/icons/icon-disabled-pink.png"
                width={200}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Camera téléconsultations"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cp-text-button-pink">
        <p>
          Nous pouvons vous orienter vers notre réseau de spécialistes pour compléter la prise en charge pour des
          avis complémentaires.
        </p>
        <SimpleButton slug="/nos-centres" content="Trouver un centre" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allDataTeamJson {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default OurJob
