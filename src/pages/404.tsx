import * as React from 'react'
import { HeadFC } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="p-4 lg:p-10">
        <p>404 not found yeet back</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
