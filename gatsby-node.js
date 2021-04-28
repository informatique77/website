const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const centerPost = path.resolve(`./src/templates/center-post.js`)
  const jobPost = path.resolve(`./src/templates/job-post.js`)

  // Get all markdown blog posts sorted by date
  const resultPosts = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 250
                    layout: FIXED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    quality: 95
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )

  const resultCenters = await graphql(`
    {
      allDataCentersJson {
        edges {
          node {
            index
            slug
            name
            lat
            lng
            open
            tel
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
      }
    }
  `)

  const resultJobs = await graphql(`
    {
      allDataJobsJson {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (resultPosts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      resultPosts.errors
    )
    return
  }

  if (resultCenters.errors) {
    reporter.panicOnBuild(
      `There was an error loading your center posts`,
      resultCenters.errors
    )
    return
  }

  if (resultJobs.errors) {
    reporter.panicOnBuild(
      `There was an error loading your job posts`,
      resultJobs.errors
    )
    return
  }

  const posts = resultPosts.data.allMarkdownRemark.nodes
  const centers = resultCenters.data.allDataCentersJson.edges
  const jobs = resultJobs.data.allDataJobsJson.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  if (centers.length > 0) {
    centers.forEach(({ node }) => {
      if (node.index !== 0) {
        createPage({
          path: node.slug,
          component: centerPost,
          context: {
            index: node.index,
            slug: node.slug,
            name: node.name,
            lat: node.lat,
            lng: node.lng,
            open: node.open,
            tel: node.tel,
            address: node.address,
          },
        })
      }
    })
  }

  if (jobs.length > 0) {
    jobs.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: jobPost,
        context: {
          title: node.title,
          slug: node.slug,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
