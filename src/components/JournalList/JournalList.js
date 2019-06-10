import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class JournalList extends Component {
    clickEdit = (event) => {
        this.setState({
            editing: !this.state.editing,
        })
    }
    deleteEntry = (journalId) => ((event) => {
        this.props.dispatch({
            type: 'DELETE_ENTRY',
            payload: journalId
        })
    })

    render(){

        const journalEntries = this.props.reduxState.tastingJournalEntries.map((entry, index) => {
            let coffeeShopName = this.props.reduxState.getCoffeeShops.filter((shop, index) => {
                return shop.coffee_shop_id === entry.coffee_shop_id
            })
            coffeeShopName = coffeeShopName[0].shop_name
            return (
                <div key={index}>
                    <p>{coffeeShopName}</p>
                    <p>{entry.description}</p>
                    <p>{entry.coffee_name}</p>
                    <p>{entry.overall}</p>
                    <p>{entry.aroma}</p>
                    <p>{entry.aftertaste}</p>
                    <p>{entry.acidity}</p>
                    <p>{entry.sweetness}</p>
                    <p>{entry.mouthfeel}</p>
                    <p>{entry.balance}</p>
                    <p>{entry.clean_cup}</p>
                    <p>{entry.uniformity}</p>
                    <Button onClick={this.deleteEntry(entry.tasting_journal_id)}><DeleteIcon />Delete</Button>
                    <Button onClick={this.editEntry}>Edit</Button>
                </div>
            )
        })
        return(
            <div>{journalEntries}</div>
        )
    }
}

export default connect(mapReduxStateToProps)(JournalList);
