import { GatsbyNode } from 'gatsby'
import path from 'path'
import readingTime from 'reading-time'
const postTemplate = path.resolve(`./src/templates/posts.tsx`)

interface CreatePagesResult {
  errors?: unknown
  data?: {
    allMdx: {
      nodes: {
        id: string
        frontmatter: {
          slug: string
        }
        internal: {
          contentFilePath: string
        }
      }[]
    }
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions

  const result: CreatePagesResult = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result')
  }

  const posts = result.data?.allMdx.nodes
  posts?.forEach((node) => {
    createPage({
      path: `/insights${node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const body = typeof node.body === 'string' ? node.body : ''
    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime(body),
    })
  }
}
