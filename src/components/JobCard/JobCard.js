import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import "./JobCard.scss"

const JobCard = ({ img, title, contract, place, slug }) => {
  const image = getImage(img)
  return (
    <Link to={slug} className="job-card">
      <div className="job-img">
        <GatsbyImage image={image} alt={title} />
      </div>
      <div className="job-resume">
        <span className="consultations">
          Consultations <span className="seven">7 sur 7</span>
        </span>
        <span className="job-title">{title}</span>
        <div className="job-contract-place">
          <span>
            {" "}
            <StaticImage
              src="../../images/jobs/icon-job-contract.png"
              alt="Contrat"
              placeholder="blurred"
              width={24}
              quality={95}
            />
            {contract}
          </span>
          <span>
            {" "}
            <StaticImage
              src="../../images/jobs/icon-job-location.png"
              alt="Lieu"
              placeholder="blurred"
              width={24}
              quality={95}
            />
            {place}
          </span>
        </div>
      </div>
    </Link>
  )
}

JobCard.proTypes = {
  img: PropTypes.object,
  title : PropTypes.string,
  contract : PropTypes.string,
  place: PropTypes.string,
  slug: PropTypes.string,
}

export default JobCard
