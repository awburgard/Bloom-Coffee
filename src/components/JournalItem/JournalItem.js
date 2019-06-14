import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import DeleteIcon from '@material-ui/icons/Delete';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button } from '@material-ui/core';



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
            <ExpansionPanel expanded={this.props.expanded === `panel${this.props.index}`} onChange={this.props.panelChange(`panel${this.props.index}`)}>
                <ExpansionPanelSummary>
                    {this.props.coffeeShopName} &nbsp;
                {this.props.entry.coffee_name}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <p>{this.props.coffeeShopName}</p>
                        <p>{this.props.entry.coffee_name}</p>
                        <p>Overall: {this.props.entry.overall}</p>
                        <p>Aroma: {this.props.entry.aroma}</p>
                        <p>Aftertaste: {this.props.entry.aftertaste}</p>
                        <p>Acidity: {this.props.entry.acidity}</p>
                        <p>Sweetness: {this.props.entry.sweetness}</p>
                        <p>Mouthfeel: {this.props.entry.mouthfeel}</p>
                        <p>Balance: {this.props.entry.balance}</p>
                        <p>Clean Cup: {this.props.entry.clean_cup}</p>
                        <p>Uniformity: {this.props.entry.uniformity}</p>
                        <p>Description: {this.props.entry.description}</p>
                    </div>
                    <Button onClick={this.deleteEntry}><DeleteIcon />Delete</Button>
                    <Button onClick={this.editEntry}>Edit</Button>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalItem));
