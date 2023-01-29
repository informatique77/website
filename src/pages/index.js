import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import HeaderHomePage from "../components/HeaderHomePage/HeaderHomePage"
import LastOpening from "../components/UI/molecules/LastOpening";
import CardsSection from "../components/HomePage_sections/CardsSection"
import MapHp from "../components/Map/MapHp"
import AboutSection from "../components/HomePage_sections/AboutSection"
import NumbersSection from "../components/HomePage_sections/NumbersSection"
import PostLink from "../components/PostLink/PostLink"
import RecruitmentSection from "../components/HomePage_sections/RecruitmentSection"
import Seo from "../components/seo"

import { closeBurger } from "../utils/burgerAnimation"

const App = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const dataCards = require('../data/dataCards.json')
  useEffect(() => {
    window.onpopstate = () => {
      closeBurger()
    }
  }, [])
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Accueil"
        description="Consultations 7 sur 7 vous accueillent dans nos centres de consultations et téléconsultations sur la Côte d'Azur 7 jours sur 7, week-ends et jours fériés sans rendez-vous, de 8h30 à 22h00 sans interruption."
        path="/"
      />
      <HeaderHomePage />
      <LastOpening />
      <MapHp allMedicalCenters={data} />
      <CardsSection arr={dataCards} />
      <NumbersSection />
      <AboutSection />
      <RecruitmentSection />
    </Layout>
  )
}

export default App

export const pageQuery = graphql`
  query {
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
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd Do MMMM YYYY", locale: "fr")
          title
          description
          excerpt
          img {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 95
              )
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`
