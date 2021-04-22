import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import JobCard from "../components/JobCard/JobCard"
import IconButton from "../components/Buttons/IconButton"
import SEO from "../components/seo"

import "../styles/Recruitment.scss"

const Recruitment = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <Layout>
      <SEO title="Recrutement" />
      <PagesHeader title="Recrutement" />
      <div className="recruitment-page-section">
        <IconButton
          css="icon-button"
          slug="/docteur"
          content="Vous êtes médecin ?"
          staticImage={
            <StaticImage
              src="../images/doctors/white-stethoscope.png"
              width={24}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Map position"
              placeholder="blurred"
            />
          }
        />
        <h2>Prochainement découvrez nos offres d'emplois </h2>
        {data.allDataJobsJson.edges.length > 1
          ? data.allDataJobsJson.edges.map((item, index) => {
              if (index !== 0) {
                return (
                  <JobCard
                    key={index}
                    img={item.node.image.src.childImageSharp}
                    title={item.node.title}
                    slug={item.node.slug}
                  />
                )
              }
            })
          : null}
      </div>
    </Layout>
  )
}

export default Recruitment
