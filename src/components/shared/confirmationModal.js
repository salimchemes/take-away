import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ConfirmationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { isOpen, handleClose, handleConfirm, item } = this.props;
        return (
            <div>
                <Dialog
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Deseas confirmar compra?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div>Item:{item.title}</div>
                            <div>Precio:{item.price}</div>
                            <span style={{ fontSize: 'small' }}>(*)Con esta compra sumaras un sello acumulable para cualquier bar de take-away</span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleConfirm} color="primary">
                            Confirmar
          </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Cancelar
          </Button>
                    </DialogActions>
                </Dialog>

            </div >

        )
    }
}

export default ConfirmationModal;