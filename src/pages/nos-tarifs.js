import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import SEO from "../components/seo"

import "../styles/OurPrices.scss"

const Prices = () => (
  <Layout>
    <SEO title="Nos Tarifs" />
    <PagesHeader title="Nos Tarifs" />
    <div className="prices-section">
      <span className="small-title">Tarifs</span>
      <div>
      <StaticImage
        src="../images/icons/euro-100.png"
        width={100}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Camera téléconsultations"
        placeholder="blurred"
      />
      </div>
      <div className="prices-resume">
        <div>
        <StaticImage
          src="../images/flag/france.png"
          width={96}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Drapeau de la France"
          placeholder="blurred"
        />
        </div>
        <p>
          <span className="underline">
            Les tarifs conventionnés de la sécurité sociale secteur 1<br></br> sans
            dépassement d'honoraire
          </span>
        </p>
      </div>
      <div className="prices-resume">
        <div>
        <StaticImage
          src="../images/flag/monaco.png"
          width={96}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Drapeau de Monaco"
          placeholder="blurred"
        />
        </div>
        <p>
          <span className="underline">
            Conventionné, caisse de Monaco pour les assurés
          </span>
        </p>
      </div>
    </div>
  </Layout>
)

export default Prices
