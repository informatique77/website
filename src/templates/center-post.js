import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import BlueCircle from "../components/BlueCircle/BlueCircle"
import ExternalButton from "../components/Buttons/ExternalButton"
import CallButton from "../components/Buttons/CallButton"

import { openOrClose } from "../utils/timer"
import { createScript, loadMapSingleCenter } from "../utils/mapScript"

const SingleCenterTemplate = ({ data }) => {
  useEffect(() => {
    if (!window.google) {
      const script = createScript()
      script.addEventListener("load", e => {
        loadMapSingleCenter(data)
      })
    } else {
      loadMapSingleCenter(data)
    }
  })

  const image = getImage(data.dataCentersJson.image.src.childImageSharp)

  return (
    <Layout>
      <div className="single-center-container">
        <div className="google-map-container">
          <div
            id={`map-${data.dataCentersJson.name}`}
            style={{ height: "100%", width: "100%" }}
          ></div>
        </div>
        <div className="description-container">
          <div className="img-center-container">
            <GatsbyImage
              image={image}
              alt="Notre équipe Consultations 7 sur 7"
            />
          </div>
          <div className="text-center-container">
            <span className="consultations">
              Consultations <span className="seven">7 sur 7</span>
            </span>
            <h1>{data.dataCentersJson.name}</h1>
            <span className="adress">{data.dataCentersJson.address}</span>
            {data.dataCentersJson.open ? (
              <div className="moreInfo-container">
                {data.dataCentersJson.open
                  ? openOrClose(data.dataCentersJson.index)
                  : null}
                <p className="opening-details">
                  Horaires : 7 jours sur 7 de 8h30 à 22h00
                </p>
                <div className="transport">
                  <div className="buttons-center">
                    <ExternalButton
                      css="button button__travel"
                      slug={data.dataCentersJson.direction}
                      content="Vous y rendre"
                      staticImage={
                        <StaticImage
                          src="../assets/images/icons/walking.png"
                          width={16}
                          quality={100}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Marche"
                          placeholder="blurred"
                        />
                      }
                    />
                    <CallButton
                      css="button button__call"
                      slug={`tel:${data.dataCentersJson.tel}`}
                      content={data.dataCentersJson.tel}
                      staticImage={
                        <StaticImage
                          src="../assets/images/icons/icon-telephone-blue.png"
                          width={16}
                          quality={100}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Téléphone"
                          placeholder="blurred"
                        />
                      }
                    />
                  </div>
                  <div className="text-transport">
                    <div className="img-transport">
                      {" "}
                      <StaticImage
                        src="../assets/images/icons/car.png"
                        width={40}
                        quality={95}
                        layout="fixed"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Voiture"
                        placeholder="blurred"
                      />
                    </div>
                    <div className="text-transport-content">
                      <span>En voiture :</span>
                      {data.dataCentersJson.transport[0].car}
                    </div>
                  </div>
                  <div className="text-transport">
                    <div className="img-transport">
                      {" "}
                      <StaticImage
                        src="../assets/images/icons/bus.png"
                        width={40}
                        quality={95}
                        layout="fixed"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Bus"
                        placeholder="blurred"
                      />
                    </div>
                    <div className="text-transport-content">
                      <span>En bus :</span>
                      {data.dataCentersJson.transport[0].bus}
                    </div>
                  </div>
                  {data.dataCentersJson.index !== 4 ? (
                    <div className="text-transport">
                      <div className="img-transport">
                        {" "}
                        <StaticImage
                          src="../assets/images/icons/tram.png"
                          width={38}
                          quality={95}
                          layout="fixed"
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Tramway"
                          placeholder="blurred"
                        />
                      </div>
                      <div className="text-transport-content">
                        <span>En tram ou train:</span>
                        {data.dataCentersJson.transport[0].tramway}
                      </div>{" "}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          <div className="blueCircles-container">
            <BlueCircle
              slug="/nos-centres"
              img={
                <StaticImage
                  src="../assets/images/circle/white-center.png"
                  alt="Nos centres"
                  placeholder="blurred"
                  width={40}
                  quality={95}
                />
              }
              text="Nos centres"
            />
            <BlueCircle
              slug="/a-propos"
              img={
                <StaticImage
                  placeholder="blurred"
                  layout="fixed"
                  quality={95}
                  src="../assets/images/circle/white-wallet.png"
                  alt="Note métier"
                />
              }
              text="Notre métier"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleCenterTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    dataCentersJson(slug: { eq: $slug }) {
      index
      slug
      name
      lat
      lng
      open
      tel
      direction
      address
      transport {
        car
        bus
        tramway
      }
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
          publicURL
        }
      }
    }
  }
`
