import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import JournalInputFields from '../JournalInputFields/JournalInputFields';


class EntryInfoDialog extends Component {
    state = {
        editing: false,
    }

    editEntry = (event) => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {
        return (
            <Dialog open={this.props.show} onClose={this.props.handleClose} fullWidth={true}>
                <DialogTitle>Entry</DialogTitle>
                {this.state.editing ?
                <DialogContent>
                    <JournalInputFields editing={this.state.editing} initialData={this.props.entry} handleClose={this.props.handleClose} />
                </DialogContent>
                :
                <DialogContent>
                    <Grid container alignItems="center">
                        <Grid item xs={4}>
                            <Typography>{this.props.coffeeShopName}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Overall: {this.props.entry.overall}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Aroma: {this.props.entry.aroma}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Aftertaste: {this.props.entry.aftertaste}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Acidity: {this.props.entry.acidity}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Sweetness: {this.props.entry.sweetness}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Mouthfeel: {this.props.entry.mouthfeel}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Balance: {this.props.entry.balance}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Clean Cup: {this.props.entry.clean_cup}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Uniformity: {this.props.entry.uniformity}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Description: {this.props.entry.description}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={this.props.deleteEntry} color="primary"><DeleteIcon /></Button>
                            <Button onClick={this.editEntry}>Edit</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
                }
                
            </Dialog>
        )
    }
}



export default connect(mapReduxStateToProps)(EntryInfoDialog)
