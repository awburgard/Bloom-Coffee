import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import JournalList from '../JournalList/JournalList';


class TastingJournalMain extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SHOPS',
            payload: { city_id: this.props.reduxState.user.home_city }
        })
        this.props.dispatch({
            type: 'GET_ENTRIES'
        })
    }

    render() {
        return (
            <div>
                <JournalList />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TastingJournalMain);
