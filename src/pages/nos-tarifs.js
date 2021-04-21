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
      <span className="small-title">Tarifs et méthodes de paiement</span>
      <StaticImage
        src="../images/icons/euro-100.png"
        width={100}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Camera téléconsultations"
        placeholder="blurred"
      />
      <div className="prices-resume">
        <p>
          Les tarifs correspondent, pour les assurés{" "}
          <span className="underline">sociaux et les assurés monégasques</span>,
          aux recommandations de la sécurité sociale (NGAP et CCAM){" "}
          <span className="underline">secteur 1</span> ou à la grille couleur de
          chaque assuré <span className="underline">(vert - rose - bulle)</span>
          .<br></br> Le tiers payant peut être proposé si vous disposez d'une{" "}
          <span className="underline">carte vitale à jour de vos droits</span>.
          <br></br>
        </p>
        <span className="underline-payment">
          Paiment uniquement en espèces ou chèques
        </span>
        <div className="payment-img">
          <StaticImage
            src="../images/icons/cash.png"
            width={100}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Camera téléconsultations"
            placeholder="blurred"
          />
          <StaticImage
            src="../images/icons/check.png"
            width={100}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Camera téléconsultations"
            placeholder="blurred"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default Prices
