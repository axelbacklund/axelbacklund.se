import React from 'react'
import { graphql, PageProps, HeadProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { SEO } from '../components/SEO'
const shortcodes = { Link } // Provide common components here

interface TemplateResult {
  mdx: {
    frontmatter: {
      title: string
      imagePath: ImageDataLike
      date: string
    }
    fields: {
      timeToRead: {
        minutes: number
      }
    }
  }
}

export default function PageTemplate({
  data: {
    mdx: {
      frontmatter: { title, imagePath, date },
      fields: {
        timeToRead: { minutes },
      },
    },
  },
  children,
}: PageProps<TemplateResult>) {
  const mainImage = getImage(imagePath)

  return (
    <Layout>
      <div className="p-4 lg:p-10 flex flex-wrap max-w-6xl">
        <div className="w-full lg:w-1/3 lg:pr-16 pr-0">
          <h1 className="text-4xl mb-8 lg:mt-0 mt-6">{title}</h1>
          {mainImage && (
            <GatsbyImage
              className="h-80 object-cover w-full"
              image={mainImage}
              alt="Header"
            />
          )}
        </div>

        <div className="w-full lg:w-2/3 lg:pt-0 pt-6">
          <div className="mb-8 leading-5">
            <p>{date}</p>
            <p className="opacity-50">{Math.round(minutes)} minute read</p>
          </div>
          <article className="prose prose-headings:font-normal prose-p:font-serif dark:prose-invert prose-li:font-serif">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export function Head({ data }: HeadProps<TemplateResult>) {
  return <SEO title={data.mdx.frontmatter.title} />
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        timeToRead {
          minutes
        }
      }
      frontmatter {
        title
        imagePath {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
