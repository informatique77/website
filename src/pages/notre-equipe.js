import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import SEO from "../components/seo"

import "../styles/OurTeam.scss"

const Team = ({ data }) => {
  const fullArray = data.allDataTeamJson.edges.length
  const halfArray = data.allDataTeamJson.edges.length / 2
  const sectionOne = data.allDataTeamJson.edges.slice(0, halfArray)
  const sectionTwo = data.allDataTeamJson.edges.slice(halfArray, fullArray)
  return (
    <Layout>
      <SEO title="Notre équipe" />
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
          <span>L’équipe consultations 7 sur 7</span>
          <p>
            Notre équipe de médecins généralistes urgentistes dynamiques, aideée par nos
            assistantes médicales, se relait 7 jours sur 7.
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
            <li style={{visibility: "hidden"}}>
               .
            </li>
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
