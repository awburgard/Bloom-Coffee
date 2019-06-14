import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import JournalItem from '../JournalItem/JournalItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import './List.css';
import { Container } from '@material-ui/core';

class JournalList extends Component {
    state = {
        expanded: false,
    }

    addEntry = (event) => {
        this.props.history.push('/tasting-journal-entry-form')
    }

    panelChange = panel => (event, isExpanded) => {
        this.setState({ expanded: isExpanded ? panel : false });
    }
    render() {
        const journalEntries = this.props.reduxState.tastingJournalEntries.map((entry, index) => {
            let coffeeShopName = this.props.reduxState.setCoffeeShops.filter((shop, index) => {
                return shop.coffee_shop_id === entry.coffee_shop_id
            })
            coffeeShopName = coffeeShopName[0].shop_name
            return (
                <Grid item xs={6}>
                    <JournalItem
                        key={index}
                        entry={entry}
                        coffeeShopName={coffeeShopName}
                        panelChange={this.panelChange}
                        index={index}
                        expanded={this.state.expanded} />
                </Grid>
            )
        })
        return (
            <div className="hero list-bg-img">
                <div className="hero-body">
                <Container>
                    <Grid container>
                        {journalEntries}
                        <Button onClick={this.addEntry} color="secondary"><AddIcon />Add</Button>
                    </Grid>
                </Container>
                </div>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalList));
