import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const SocialNetworks = () => {
  return (
    <div className="social-networks">
      <a href="https://www.instagram.com/consultations7sur7/">
        <StaticImage
          src="../../assets/images/icons/instagram-50.png"
          loading="eager"
          width={30}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo Instagram"
          placeholder="blurred"
        />
      </a>
      <a href="https://www.facebook.com/consultations77/">
        <StaticImage
          src="../../assets/images/icons/facebook-50.png"
          loading="eager"
          width={30}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo Facebook"
          placeholder="blurred"
        />
      </a>
      <a href="https://www.linkedin.com/company/consultations-7-sur-7/">
        <StaticImage
          src="../../assets/images/icons/linkedin-50.png"
          loading="eager"
          width={30}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo Facebook"
          placeholder="blurred"
        />
      </a>
    </div>
  )
}

export default SocialNetworks
