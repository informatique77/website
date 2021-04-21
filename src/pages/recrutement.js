import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import JobCard from "../components/JobCard/JobCard"
import SEO from "../components/seo"

import "../styles/Recruitment.scss"

const Recruitment = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recrutement" />
      <PagesHeader title="Recrutement" />
      <div className="recruitment-page-section">
        {data.allDataJobsJson.edges.map((item, index) => {
          return (
            <JobCard
              key={index}
              img={item.node.image.src.childImageSharp}
              title={item.node.title}
              slug={item.node.slug}
            />
          )
        })}
        <h2>Découvrez nos offres d'emplois </h2>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allDataJobsJson {
      edges {
        node {
          title
          contract
          place
          slug
          image {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  layout: FIXED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 95
                )
              }
            }
          }
        }
      }
    }
  }
`

export default Recruitment
