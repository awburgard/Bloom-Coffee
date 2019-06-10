import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class JournalItem extends Component {

    editEntry = (event) => {
        this.props.history.push('/tasting-journal-entry-form')
    }

    deleteEntry = (event) => {
        this.props.dispatch({
            type: 'DELETE_ENTRY',
            payload: this.props.entry.tasting_journal_id
        })
    }
    render() {
        return (
            <div>
                <p>{this.props.coffeeShopName}</p>
                <p>{this.props.entry.description}</p>
                <p>{this.props.entry.coffee_name}</p>
                <p>{this.props.entry.overall}</p>
                <p>{this.props.entry.aroma}</p>
                <p>{this.props.entry.aftertaste}</p>
                <p>{this.props.entry.acidity}</p>
                <p>{this.props.entry.sweetness}</p>
                <p>{this.props.entry.mouthfeel}</p>
                <p>{this.props.entry.balance}</p>
                <p>{this.props.entry.clean_cup}</p>
                <p>{this.props.entry.uniformity}</p>
                <Button onClick={this.deleteEntry}><DeleteIcon />Delete</Button>
                <Button onClick={this.editEntry}>Edit</Button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalItem));
