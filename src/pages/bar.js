import React, { Component } from 'react';
import Layout from '../components/layout';
import BarGrid from '../components/barGrid';
import { Link } from 'gatsby';

class BarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 250,
            bar: {
                id: 1,
                name: 'Antares',
                img: '',
                medals: '1/5 sellos',
                items: [
                    {
                        img: 'https://www.gannett-cdn.com/-mm-/89934f7b13e7717eb560f3babda84f20895abcd0/c=83-0-724-482/local/-/media/2018/07/17/DetroitFreeP/DetroitFreePress/636674313628993565-GettyImages-684133728.jpg',
                        title: 'Golden',
                        price: '$100',
                        cols: 2,
                        featured: true,
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
                        title: 'Tasty burger',
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/camera.jpg',
                        title: 'Camera',
                        price: 'Danson67',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
                        title: 'Morning',
                        price: '$100',
                        featured: true,
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/hats.jpg',
                        title: 'Hats',
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/honey.jpg',
                        title: 'Honey',
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
                        title: 'Vegetables',
                        price: '$100',
                        cols: 2,
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
                        title: 'Water plant',
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
                        title: 'Mushrooms',
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
                        title: 'Olive oil',
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com/static/images/grid-list/star.jpg',
                        title: 'Sea star',
                        cols: 2,
                        price: '$100',
                    },
                    {
                        img: 'https://material-ui.com//static/images/grid-list/bike.jpg',
                        title: 'Bike',
                        price: '$100',
                    },
                ]
            }
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