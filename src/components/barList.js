import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'gatsby';

// const styles = theme => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         width: 500,
//         height: 450,
//     },
//     icon: {
//         color: 'rgba(255, 255, 255, 0.54)',
//     },
// });

class BarList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    persistBar = (bar) => {
        // localStorage.setItem('bar', JSON.stringify(bar));
    }

    render() {
        const bars = this.props.bars;
        return (
            <div>
                <h3>Selecciona un bar</h3>
                <div>
                    <List component="nav">
                        {bars.map(bar => (
                            <ListItem button key={bar.id} alignItems="flex-start" onClick={() => {
                                this.persistBar(bar);
                            }} component={Link} to="/bar">

                                {/* <Avatar alt="Remy Sharp" src="gatsby-astronaut.png" /> */}
                                <ListItemText primary={bar.name} secondary={bar.medals} />
                            </ListItem>
                        ))}

                    </List>
                    <Divider />
                </div>
            </div>);
    }
}

export default BarList;