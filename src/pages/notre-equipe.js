import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const Team = ({ data }) => {
  const fullArray = data.allDataTeamJson.edges.length
  const halfArray = data.allDataTeamJson.edges.length / 2
  const sectionOne = data.allDataTeamJson.edges.slice(0, halfArray)
  const sectionTwo = data.allDataTeamJson.edges.slice(halfArray, fullArray)
  return (
    <Layout>
      <Seo
        title="Notre équipe"
        description="Consultations 7 sur 7 c'est avant tout une équipe de médecins généralistes et urgentistes, accompagnée pas nos assistantes médicales."
        path="notre-equipe"
      />
      <div className="our-job-img-container">
        <StaticImage
          src="../assets/images/ourJobs/notre-equipe.jpg"
          width={800}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Camera téléconsultations"
          placeholder="blurred"
        />
        <div className="cp-text-img">
          <p>
            Notres équipe de médecins généralistes urgentistes dynamiques, aidée de nos assistantes médicales, se relaie <span>7 jours sur 7</span>.
          </p>
        </div>
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
        <div className="our-job-img-container">
          <StaticImage
            src="../assets/images/icons/icon-doctor-pink.png"
            width={500}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Camera téléconsultations"
            placeholder="blurred"
          />
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
      <div className="cp-text">
        <p>Des radiologues et des équipes paramédicales (infirmiers, ostéopathes, orthoptistes) sont également
          présents et à votre service au sein de nos centres médicaux.
        </p>
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

export default Team
