import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import Seo from "../components/seo"

const Recruitment = () => {
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
        <div className="recruitment-img-container">
          <div className="first-form">
            <h3>Médecin</h3>
            <div className="recruitment-img-1">
              <StaticImage
                width={330}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../assets/images/ourJobs/our-job-3.jpg"
                alt="Un médecin"
              />
            </div>
            <Link to="/recrutement-docteur" className="btn primary">Postuler</Link>
          </div>
          <div>
            <h3>Assistant(e) Médical(e)</h3>
            <div className="recruitment-img-2">
              <StaticImage
                width={330}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../assets/images/ourJobs/our-job-8.jpg"
                alt="Une assistante médicale"
              />
            </div>
            <Link to="/recrutement-assistant" className="btn primary">Postuler</Link>
          </div>
          <div>
            <h3>Agent Polyvalente(e)</h3>
            <div className="recruitment-img-2">
              <StaticImage
                width={330}
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                src="../assets/images/ourJobs/our-job-8.jpg"
                alt="Une assistante médicale"
              />
            </div>
            <Link to="/recrutement-agent" className="btn primary">Postuler</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Recruitment
