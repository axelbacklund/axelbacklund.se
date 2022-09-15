import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import { SEO } from '../components/SEO'

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-green-lighter dark:bg-green-darker text-white px-4 lg:px-10 pb-6 pt-16 h-screen text-sm">
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-between items-center">
            <p>E-mail</p>
            <div className="h-px bg-white w-full flex-1 mx-4" />
            <p>axel (ät) backlund (dot) com</p>
          </div>

          <div className="flex justify-between items-center pt-6">
            <p>GitHub</p>
            <div className="h-px bg-white w-full flex-1 mx-4" />
            <a
              target="_blank"
              href="https://github.com/axelbacklund"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              <p>axelbacklund</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <SEO title="Contact" />
