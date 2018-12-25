import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const FirstPage = () => (
  <Layout>
    <SEO title="Admin Page" />
    <h2>Admin</h2>
    <h1>Hola Antares!</h1>
    <Link to="/">volver a homepage</Link>
  </Layout>
)

export default FirstPage
