import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import SEO from "../components/seo"

import "../styles/OurJob.scss"

const OurJob = () => (
  <Layout>
    <SEO title="Notre métier" />
    <PagesHeader title="Notre Métier" />
    <div className="our-job-section">
      <div className="our-job-resume">
        <div className="part-one">
          <div className="our-job-img">
            <StaticImage
              width={350}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../images/ourJobs/our-job-2.jpg"
              alt="Docteur qui soigne un patient"
            />
          </div>
          <div className="our-job-text">
            <p>
              {" "}
              Nous effectuons des consultations sans rendez-vous pour vous
              prendre en charge.
              <br></br>
              <br></br>
              Si besoin, nous pouvons vous proposer d'effectuer des examens
              d'imagerie médicale ou de biologie médicale pouvant être réalisé
              sur place.
            </p>
          </div>
        </div>
        <div className="part-two">
          <div className="our-job-text">
            <p>
              <ul>
                <li>- Médecine générale</li>
                <li>- Médecine d'urgence</li>
                <li>- Gérontologie</li>
                <li>- Pédiatrie</li>
                <li>- Suture de plaie</li>
                <li>- Entorse et fracture</li>
              </ul>
            </p>
          </div>
          <div className="our-job-img">
            <StaticImage
              width={350}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../images/ourJobs/our-job-9.jpg"
              alt="Docteur qui prescrit une ordonnance"
            />
          </div>
        </div>
        <div className="part-three">
          <div className="our-job-img">
            <StaticImage
              width={350}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="blurred"
              src="../images/ourJobs/our-job-6.jpg"
              alt="Salle de soins"
            />
          </div>
          <div className="our-job-text">
            <p>
              Nous pouvons vous orienter vers notre réseau de spécialistes pour
              complèter la prise en charge pour des avis complémentaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default OurJob
