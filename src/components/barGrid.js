import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ConfirmationModal from '../components/shared/confirmationModal';
import ConfirmationPurchase from '../components/shared/confirmationPurchase';
import './layout.css';

class BarGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { showDialog: false, item: {}, showRecipe: false }
    }

    handleItem = (item) => {
        console.log(item);
        this.setState({
            showDialog: true,
            item: item
        });
    }

    handleClose = () => {
        this.setState({ showDialog: false, showRecipe: false });
    }

    handleConfirm = () => {
        this.setState({ showDialog: false, showRecipe: true });
    }

    render() {
        const bar = this.props.bar;
        return (
            <div className={styles.root}>
                <GridList cellHeight={180} className={styles.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    </GridListTile>
                    {bar.items.map(item => (

                        <GridListTile key={item.img}>
                            <img src={item.img} alt={item.title} onClick={() => {
                                this.handleItem(item);
                            }
                            } />
                            <GridListTileBar
                                title={item.title}
                                subtitle={<span>{item.price}</span>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
                {this.state.showDialog} <ConfirmationModal
                    isOpen={this.state.showDialog}
                    item={this.state.item}
                    handleClose={this.handleClose}
                    handleConfirm={this.handleConfirm}></ConfirmationModal>
                {this.state.showRecipe}  <ConfirmationPurchase
                    isOpen={this.state.showRecipe}
                    item={this.state.item}
                    handleClose={this.handleClose}
                    handleConfirm={this.handleConfirm}></ConfirmationPurchase>
            </div>);
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

export default BarGrid;