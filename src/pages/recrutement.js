import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import JobCard from "../components/JobCard/JobCard"
import ExternalButton from "../components/Buttons/ExternalButton"
import Seo from "../components/seo"

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
      <Seo
        title="Recrutement"
        description="Page de recrutement médecin et assistant(e) médical(e) Consultations 7 sur 7"
        path="recrutement"
      />
      <PagesHeader title="Recrutement" />
      <div className="recruitment-page-section">
        <h2>Nos formulaires</h2>
        <div className="recruitment-buttons-container">
          <ExternalButton
            css="recruitment-button"
            slug="https://docs.google.com/forms/d/e/1FAIpQLSct8CxPIoE7tdidENAHuSQ5eJDHNYO3Z0AWi8HQqXvf1epoew/viewform?usp=sf_link"
            content="Médecin"
            staticImage={
              <StaticImage
                src="../images/doctors/white-stethoscope.png"
                width={24}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Recrutement Docteur"
                placeholder="blurred"
              />
            }
          />
          <ExternalButton
            css="recruitment-button"
            slug="https://docs.google.com/forms/d/e/1FAIpQLSfixH3rfleAPWZh0b9fbBC5s-etHaNTeehE52d3l0dtl_wakg/viewform?usp=sf_link"
            content="Assitant(e) Médical(e)"
            staticImage={
              <StaticImage
                src="../images/icons/nurse.png"
                width={24}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Recrutement Assistant(e) Médical(e)"
                placeholder="blurred"
              />
            }
          />
        </div>
        <div className="recruitment-img-container">
          <div className="recruitment-img-1">
            <StaticImage
              width={330}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../images/ourJobs/our-job-3.jpg"
              alt="Un médecin"
            />
          </div>
          <div className="recruitment-img-2">
            <StaticImage
              width={330}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../images/ourJobs/our-job-8.jpg"
              alt="Une assistante médicale"
            />
          </div>
        </div>
        <div className="recruitment-forms-container">
          <div className="doctor-form">
            <form name="contact-doctor" method="POST" data-netlify="true">
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <p>
                <label>
                  Nom <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Prénom <input type="text" name="nickname" />
                </label>
              </p>
              <p>
                Thésé:{" "}
                <div>
                  <label>
                    Oui
                    <input type="radio" name="oui" />
                  </label>
                </div>
                <div>
                  <label>
                    Non
                    <input type="radio" name="non" />
                  </label>
                </div>
              </p>
              <p>
                Spécialité:{" "}
                <div>
                  <label>
                    Médecine générale
                    <input type="checkbox" name="generale" />
                  </label>
                </div>
                <div>
                  <label>
                    Médecine d'urgence
                    <input type="checkbox" name="urgence" />
                  </label>
                </div>
              </p>
              <p>
                <label>
                  Téléphone:{" "}
                  <input
                    type="tel"
                    name="tel"
                    pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                  />
                </label>
              </p>
              <p>
                <label>
                  Adresse e-mail: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
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
