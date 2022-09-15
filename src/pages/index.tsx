import * as React from 'react'
import { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { GatsbyImage } from 'gatsby-plugin-image'
import { SEO } from '../components/SEO'

const IndexPage = ({ data }: PageProps<Queries.IndexPostsQuery>) => {
  return (
    <main>
      <Layout>
        <div className="bg-green-lighter dark:bg-green-darker text-white px-4 lg:px-10 pb-6 pt-16">
          <p>
            I occasionally post some insights on AI, app development and
            cleantech.
            <br />
            Currently, I study engineering and architecture at KTH.
          </p>
        </div>

        <div className="p-4 lg:p-10 max-w-full">
          <div className="flex flex-wrap -mx-8 -mt-8 overflow-hidden xl:-mx-8">
            {data.allMdx.edges.map(({ node }) => (
              <div
                key={node.id}
                className="my-8 px-8 w-full overflow-hidden xl:my-8 xl:px-8 xl:w-1/2"
              >
                {node.frontmatter?.imagePath?.childImageSharp
                  ?.gatsbyImageData && (
                  <GatsbyImage
                    className="w-full mb-6 object-cover max-h-80 lg:max-h-128"
                    image={
                      node.frontmatter?.imagePath?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt="Header"
                  />
                )}
                <div className="w-full flex justify-between mb-2">
                  <p>
                    {Math.round(node.fields?.timeToRead?.minutes ?? 0)} minute
                    read
                  </p>
                  <p>{node.frontmatter?.date}</p>
                </div>
                <h1 className="text-4xl mb-4">{node.frontmatter?.title}</h1>

                <Button
                  link={`/insights${node.frontmatter?.slug}`}
                  text="Read"
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />

export const query = graphql`
  query IndexPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            timeToRead {
              minutes
            }
          }
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
            imagePath {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
