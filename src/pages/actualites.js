import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import Seo from "../components/seo"
import PostSection from "../components/HomePage_sections/PostSection"
import PostLink from "../components/PostLink/PostLink"

const News = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const Posts = posts.map((item, index) => <PostLink key={index} post={item} />)
  return(
    <Layout>
    <Seo title="Nos actualités" />
    <PagesHeader title="Nos actualités" />
    <PostSection posts={Posts} home={false}/>
  </Layout>
  )
}

export default News

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd Do MMMM YYYY", locale: "fr")
          title
          description
          excerpt
          img {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 95
              )
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`
