import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import 'typeface-roboto';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>prototype</h1>
    <p>take-away para bares con fidelizacion de clientes con sistema de puntos y premios.</p>
    <p>Desarrollado por Franco, Joaquin y Salim</p>
    <div>
      <Link to="/admin/">Admin</Link>
    </div>
    <div>
      <Link to="/client/">Client</Link>
    </div>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>  */}
  </Layout>
)

export default IndexPage
