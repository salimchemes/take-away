import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class ConfirmationPurchase extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { isOpen, handleClose, item } = this.props;
        return (
            <div>
                <Dialog
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Compra realizada con éxito"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div>Item:{item.title}</div>
                            <div>Precio:{item.price}</div>
                            <div>Sellos:2/5</div>
                            <a href='/'>ver comprobante</a>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={handleClose} color="primary" autoFocus>
                            Cerrar
          </Button>
                    </DialogActions>
                </Dialog>

            </div>

        )
    }
}

export default ConfirmationPurchase;