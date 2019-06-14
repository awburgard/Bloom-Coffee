import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import DeleteIcon from '@material-ui/icons/Delete';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, Grid } from '@material-ui/core';



class JournalItem extends Component {

    editEntry = (event) => {
        this.props.dispatch({
            type: `GET_ENTRY`,
            payload: this.props.entry.tasting_journal_id,
        })
        this.props.history.push(`/tasting-journal-edit-form/?entry=${this.props.entry.tasting_journal_id}`)
    }

    deleteEntry = (event) => {
        this.props.dispatch({
            type: 'DELETE_ENTRY',
            payload: this.props.entry.tasting_journal_id
        })
    }
    render() {
        return (
            <ExpansionPanel color="secondary" expanded={this.props.expanded === `panel${this.props.index}`} onChange={this.props.panelChange(`panel${this.props.index}`)}>
                <ExpansionPanelSummary>
                    {this.props.coffeeShopName} &nbsp;
                {this.props.entry.coffee_name}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item >
                            <p>Coffee Shop: {this.props.coffeeShopName}</p>
                        </Grid>
                        <Grid item>
                            <p>Coffee: {this.props.entry.coffee_name}</p>
                        </Grid>
                        <Grid item>
                            <p>Overall: {this.props.entry.overall}</p>
                        </Grid>
                        <Grid item>
                            <p>Aroma: {this.props.entry.aroma}</p>
                        </Grid>
                        <Grid item>
                            <p>Aftertaste: {this.props.entry.aftertaste}</p>
                        </Grid>
                        <Grid item>
                            <p>Acidity: {this.props.entry.acidity}</p>
                        </Grid>
                        <Grid item>
                            <p>Sweetness: {this.props.entry.sweetness}</p>
                        </Grid>

                        <Grid item>
                            <p>Mouthfeel: {this.props.entry.mouthfeel}</p>
                        </Grid>
                        <Grid item>
                            <p>Balance: {this.props.entry.balance}</p>
                        </Grid>
                        <Grid item>
                            <p>Clean Cup: {this.props.entry.clean_cup}</p>
                        </Grid>
                        <Grid item>
                            <p>Uniformity: {this.props.entry.uniformity}</p>
                        </Grid>
                        <Grid item>
                            <p>Description: {this.props.entry.description}</p>
                        </Grid>
                        <Grid item>
                            <Button onClick={this.deleteEntry} color="primary"><DeleteIcon />Delete</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={this.editEntry}>Edit</Button>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalItem));
