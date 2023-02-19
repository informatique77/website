import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import CallButton from "../Buttons/CallButton"
import ExternalButton from "../Buttons/ExternalButton"
import ShowMoreButton from "../Buttons/ShowMoreButton"
import { openOrClose } from "../../utils/timer"

/**
 * Create an Li for the Google Map List
 * @param {Object} center A medical center
 */
const LiContent = ({ center }) => {
  const image = getImage(center.node.image.src)
  return (
    <li
      className="li-center"
      style={{
        backgroundColor: center.node.bgColor,
        animationDelay: center.node.index + 0.1 + "s",
      }}
      key={center.node.index}
    >
      <div className="li-img-container">
        <GatsbyImage image={image} alt={center.node.name} />
      </div>
      <div className="li-text-container">
        <h2>
        <StaticImage
            src="../../assets/images/c7sante.png"
            loading="eager"
            width={45}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo C7 Santé"
            placeholder="blurred"
          />
          {center.node.name}
        </h2>
        <p className="li-address">{center.node.address}</p>
        <br></br>
        {center.node.open
          ? openOrClose(center.node.index)
          : null}
        {center.node.open ? (
          <ShowMoreButton slug={center.node.slug} content={"En savoir plus"} />
        ) : null}

        <div className="li-buttons-container">
          {center.node.direction ? (
            <ExternalButton
              css="button button__travel"
              slug={center.node.direction}
              content="Vous y rendre"
              staticImage={
                <StaticImage
                  src="../../assets/images/icons/walking.png"
                  width={18}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Marche"
                  placeholder="blurred"
                />
              }
            />
          ) : null}
          <br></br>
          {center.node.open && center.node.index !== 0 ? (
            <CallButton
              css="button button__call"
              slug={`tel:${center.node.tel}`}
              content={center.node.tel}
              staticImage={
                <StaticImage
                  src="../../assets/images/icons/icon-telephone-blue.png"
                  width={18}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Téléphone"
                  placeholder="blurred"
                />
              }
            />
          ) : null}
        </div>
      </div>
    </li>
  )
}

export default LiContent
