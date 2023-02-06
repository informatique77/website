import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import PriceTable from "../components/PriceTable/PriceTable"
import Seo from "../components/seo"

const Prices = () => (
  <Layout>
    <Seo title="Nos Tarifs" />
    <PagesHeader
      title="Nos Tarifs"
      desription="Consulter les tarifs pratiqués chez C7 Santé dans nos centre de consultatations et de téléconsulations"
      path="nos-tarifs"
    />
    <div className="prices-section">
      <span className="small-title">Tarifs</span>
      <div>
        <StaticImage
          src="../assets/images/icons/euro-100.png"
          width={100}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Camera téléconsultations"
          placeholder="blurred"
        />
      </div>
      <div className="pricesTable-container">
        <PriceTable
          country="France"
          image={
            <StaticImage
              src="../assets/images/flag/france.png"
              width={96}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Drapeau de Monaco"
              placeholder="blurred"
            />
          }
          resume={
            <ul>
              <li>Tarifs conventionnés de la sécurité sociale</li>
              <li>Secteur 1</li>
              <li>Sans dépassement d'honoraire</li>
            </ul>
          }
        />
        <PriceTable
          country="Monaco"
          image={
            <StaticImage
              src="../assets/images/flag/monaco.png"
              width={96}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Drapeau de la France"
              placeholder="blurred"
            />
          }
          resume={
            <ul>
              <li>Conventionné</li>
              <li>Caisse de Monaco pour les assurés</li>
            </ul>
          }
        />
      </div>
    </div>
  </Layout>
)

export default Prices
