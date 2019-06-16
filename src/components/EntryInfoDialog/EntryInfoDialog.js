import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { Dialog, DialogTitle, DialogContent, Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
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
            <Dialog open={this.props.show} onClose={this.props.handleClose} fullWidth={true} maxWidth={"lg"}>
                <DialogTitle>Entry</DialogTitle>
                {this.state.editing ?
                    <DialogContent>
                        <JournalInputFields editing={this.state.editing} initialData={this.props.entry} handleClose={this.props.handleClose} />
                    </DialogContent>
                    :
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography>{this.props.coffeeShopName}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Overall: {this.props.entry.overall}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Aroma: {this.props.entry.aroma}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Aftertaste: {this.props.entry.aftertaste}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Acidity: {this.props.entry.acidity}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Sweetness: {this.props.entry.sweetness}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Mouthfeel: {this.props.entry.mouthfeel}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Balance: {this.props.entry.balance}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Clean Cup: {this.props.entry.clean_cup}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Uniformity: {this.props.entry.uniformity}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Description: {this.props.entry.description}</Typography>
                            </Grid>
                        </Grid>
                        <div>
                            <Button onClick={this.props.deleteEntry} color="primary"><DeleteIcon /></Button>
                            <Button onClick={this.editEntry}><CreateIcon/></Button>
                        </div>
                    </DialogContent>
                }
            </Dialog>
        )
    }
}



export default connect(mapReduxStateToProps)(EntryInfoDialog)
