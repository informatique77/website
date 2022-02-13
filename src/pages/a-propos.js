import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import PriceTable from "../components/PriceTable/PriceTable"
import Seo from "../components/seo"

const OurJob = ({ data }) => {
  const fullArray = data.allDataTeamJson.edges.length
  const halfArray = data.allDataTeamJson.edges.length / 2
  const sectionOne = data.allDataTeamJson.edges.slice(0, halfArray)
  const sectionTwo = data.allDataTeamJson.edges.slice(halfArray, fullArray)
  return (
    <Layout>
      <Seo
        title="Qui sommes nous ?"
        description="Chez consultations 7 sur 7, notre métier c'est de vous proposer des consultations pour adultes et enfants, sans rendez-vous, 
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
          <div className="pink-container">
            <p>
              Nous pouvons vous orienter vers notre réseau de spécialistes pour compléter la prise en charge pour des avis
              complémentaires.
            </p>
          </div>
      </div>
      <div className="our-job-img-container">      
          <StaticImage
            src="../assets/images/ourJobs/notre-equipe.jpg"
            width={600}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Camera téléconsultations"
            placeholder="blurred"
          />   
      </div>
      <div className="name-container">
        <div className="section-one">
          <ul>
            {" "}
            {sectionOne.map((item, index) => {
              return (
                <li key={index}>
                  Dr <span>{item.node.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="section-two">
          <ul>
            {" "}
            {sectionTwo.map((item, index) => {
              return (
                <li key={index + 1}>
                  Dr <span>{item.node.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
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
