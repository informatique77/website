import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Map from "../components/Map/Map"
import SEO from "../components/seo"

const ourCenters = ({ data }) => (
  <Layout>
    <SEO title="Nos Centres" />
    <Map allMedicalCenters={data} />
  </Layout>
)

export const query = graphql`
  {
    allDataCentersJson {
      edges {
        node {
          index
          address
          lat
          lng
          map
          open
          name
          tel
          direction
          slug
          bgColor
          image {
            src {
              childImageSharp {
                gatsbyImageData(
                  width: 250
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

export default ourCenters
