import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Map from "../components/Map/Map"
import Seo from "../components/seo"

const ourCenters = ({ data }) => {
  console.log(data.allDataCentersJson)
  return (
    <Layout>
      <Seo
        title="Nos Centres"
        description="C7 Santé vous acceuillent dans nos centres de 8h30 à 22h00 7 jours sur 7, ainsi que notre centre de téléconsultations de 9h à 21h"
        path="nos-centres"
      />
      <Map allMedicalCenters={data} />
    </Layout>
  )
}

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
