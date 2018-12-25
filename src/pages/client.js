import React, { Component } from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BarList from '../components/barList';
import tileData from './tileData';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 250,
      bars: tileData
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <SEO title="Client Page" />
          <h2>Hola Salim! que vas a pedir hoy?</h2>
          <h1>Saldo: ${this.state.amount}</h1>
          <BarList bars={this.state.bars} />
          <Link to="/">volver a homepage</Link>
        </Layout>
      </div >);
  }
}


export default SecondPage
