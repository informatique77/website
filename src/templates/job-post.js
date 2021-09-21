import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"

const JobPostTemplate = ({ data }) => {
  return (
    <Layout>
      <PagesHeader title={data.dataJobsJson.title} />
    </Layout>
  )
}

export default JobPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    dataJobsJson(slug: { eq: $slug }) {
      title
    }
  }
`
