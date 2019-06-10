import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import JournalItem from '../JournalItem/JournalItem';


class JournalList extends Component {
    render(){

        const journalEntries = this.props.reduxState.tastingJournalEntries.map((entry, index) => {
            let coffeeShopName = this.props.reduxState.getCoffeeShops.filter((shop, index) => {
                return shop.coffee_shop_id === entry.coffee_shop_id
            })
            coffeeShopName = coffeeShopName[0].shop_name
            return (
                <JournalItem key={index} entry={entry} coffeeShopName={coffeeShopName}/>
            )
        })
        return(
            <div>{journalEntries}</div>
        )
    }
}

export default connect(mapReduxStateToProps)(JournalList);
