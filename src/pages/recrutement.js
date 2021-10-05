import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import FormDoctor from "../components/Form/FormDoctor"
import FormAssistant from "../components/Form/FormAssistant"
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
            <FormDoctor />
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
            <FormAssistant />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Recruitment
