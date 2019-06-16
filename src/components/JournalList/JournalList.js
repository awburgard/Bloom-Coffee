import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import JournalItem from '../JournalItem/JournalItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import './List.css';
import EntryEditDialog from '../EntryEditDialog/EntryEditDialog';
import Typography from '@material-ui/core/Typography'

class JournalList extends Component {
    state = {
        expanded: false,
    }

    addEntry = (event) => {
        this.props.dispatch({
            type: 'ENTRY_EDIT_DIALOG_SHOW'
        })
    }

    render() {
        const journalEntries = this.props.reduxState.tastingJournalEntries.map((entry, index) => {
            let coffeeShopName = this.props.reduxState.setCoffeeShops.filter((shop, index) => {
                return shop.coffee_shop_id === entry.coffee_shop_id
            })
            coffeeShopName = coffeeShopName[0].shop_name
            return (
                <Grid item xs={4} key={index}>
                    <JournalItem
                        key={index}
                        entry={entry}
                        coffeeShopName={coffeeShopName}
                        panelChange={this.panelChange}
                        index={index}
                    />
                </Grid>
            )
        })
        return (
            <div className="hero list-bg-img">
                <div className="hero-body">
                    <Typography align="center" gutterBottom>
                        <Button onClick={this.addEntry} size="large" variant="outlined" color="secondary"><AddIcon />ADD</Button>
                    </Typography>
                    <Grid container>
                        {journalEntries}
                    </Grid>
                    <EntryEditDialog show={this.props.reduxState.entryEditDialogShowReducer}
                        handleAddToggle={this.addEntry} />
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalList));
