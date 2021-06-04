import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import Seo from "../components/seo"

import "../styles/OurTeam.scss"

const Team = ({ data }) => {
  const fullArray = data.allDataTeamJson.edges.length
  const halfArray = data.allDataTeamJson.edges.length / 2
  const sectionOne = data.allDataTeamJson.edges.slice(0, halfArray + 1)
  const sectionTwo = data.allDataTeamJson.edges.slice(halfArray + 1, fullArray)
  return (
    <Layout>
      <Seo
        title="Notre équipe"
        description="Consultations 7 sur 7 c'est avant tout une équipe de médecins généralistes et urgentistes, accompagnée pas nos assistantes médicales."
        path="notre-equipe"
      />
      <PagesHeader title="Notre équipe" />
      <div className="ourTeam-header">
        <div className="ourTeam-img">
          <StaticImage
            width={350}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            placeholder="blurred"
            src="../images/doctors/doctors-no-shapes.jpg"
            alt="Notre équipe"
          />
        </div>
        <div className="ourTeam-resume">
          <span>
            L’équipe consultations{" "}
            <span style={{ color: "#e74c3c" }}>7 sur 7</span>
          </span>
          <p>
            Notre équipe de médecins généralistes urgentistes dynamiques, aidée
            par nos assistantes médicales, se relaie 7 jours sur 7.
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

export default Team
