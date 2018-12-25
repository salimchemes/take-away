import React, { Component } from 'react';
import Layout from '../components/layout';
import BarGrid from '../components/barGrid';
import { Link } from 'gatsby';

class BarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 250,
            bar: JSON.parse(localStorage.getItem('bar'))
        }
        console.log(this.state.bar)
    }
    render() {
        const bar = this.state.bar;
        return (
            <Layout>
                <h2>{bar.name}</h2>
                <h1>Saldo: ${this.state.amount} - {bar.medals}</h1>
                <h3> Elige el item que deseas</h3>

                <BarGrid bar={bar} />
                <Link to="/client/">volver a Lista de bares</Link>
            </Layout>);
    }
}


export default BarPage;