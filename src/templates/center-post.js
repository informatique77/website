import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import InfoWindowContent from "../components/Map/InfoWindowContent"
import BlueCirclesContainer from "../components/BlueCircle/BlueCirclesContainer"
import ExternalButton from "../components/Buttons/ExternalButton"
import CallButton from "../components/Buttons/CallButton"

import { infoWindowImg } from "../utils/infoWindowScript"
import { openOrClose } from "../utils/timer"

import iconOpen from "../images/icons/map-firstaid.png"
import iconClose from "../images/icons/map-bulldozer.png"

import "../components/Map/Map.scss"
import "../styles/CenterPost.scss"

const SingleCenterTemplate = ({ data }) => {
  useEffect(() => {
    let mounted = true
    if (mounted) {
      loadGoogleMapScript()
    }
    return function cleanup() {
      mounted = false
    }
  })

  const loadGoogleMapScript = () => {
    if (!window.google) {
      var s = document.createElement("script")
      s.type = "text/javascript"
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.GATSBY_API_MAP}`
      var x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        loadMap()
      })
    } else {
      loadMap()
    }
  }

  const loadMap = () => {
    const open = iconOpen
    const close = iconClose
    const mapCenter = {
      lat: data.dataCentersJson.lat,
      lng: data.dataCentersJson.lng,
    }
    const newMap = new window.google.maps.Map(
      document.getElementById(`map-${data.dataCentersJson.name}`),
      {
        center: mapCenter,
        zoom: 16,
      }
    )

    const marker = new window.google.maps.Marker({
      position: mapCenter,
      map: newMap,
      icon: data.dataCentersJson.open ? open : close,
    })

    const content = InfoWindowContent(
      data.dataCentersJson,
      infoWindowImg(data.dataCentersJson.index)
    )
    const infoWindow = new window.google.maps.InfoWindow({
      content: content,
      maxWidth: "350px",
    })

    data.dataCentersJson.infoWindow = infoWindow
    data.dataCentersJson.marker = marker

    marker.addListener("click", () => {
      infoWindow.open(newMap, marker)
    })
  }

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
                <p className="opening-details">Horaires : 7 jours sur 7 de 8h30 à 22h00</p>
                <p className="payment">
                  Méthodes de paiements : {data.dataCentersJson.payment}
                </p>
                <div className="transport">
                  <div className="buttons-center">
                    <ExternalButton
                      css="travel-button white"
                      slug={data.dataCentersJson.direction}
                      content="Vous y rendre"
                      staticImage={
                        <StaticImage
                          src="../images/icons/walking.png"
                          width={16}
                          quality={100}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Marche"
                          placeholder="blurred"
                        />
                      }
                    />
                    <CallButton
                      css="call-button white"
                      slug={`tel:${data.dataCentersJson.tel}`}
                      content={data.dataCentersJson.tel}
                      staticImage={
                        <StaticImage
                          src="../images/icons/icon-telephone-blue.png"
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
                        src="../images/icons/car.png"
                        width={40}
                        height={40}
                        quality={95}
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
                        src="../images/icons/bus.png"
                        width={40}
                        height={40}
                        quality={95}
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
                  <div className="text-transport">
                    <div className="img-transport">
                      {" "}
                      <StaticImage
                        src="../images/icons/tram.png"
                        width={40}
                        height={40}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Tramway"
                        placeholder="blurred"
                      />
                    </div>
                    <div className="text-transport-content">
                    <span>En tram :</span>
                    {data.dataCentersJson.transport[0].tramway}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <BlueCirclesContainer />
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
      payment
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
