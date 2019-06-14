import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import JournalList from '../JournalList/JournalList';
import './TastingJournalMain.css'


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
            <div className="hero is-large tasting-bg-img">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title has-text-white has-text-centered">
                    Tasting Journal
                </h1>
                </div>
              </div>
            </div>
            <JournalList />
          </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TastingJournalMain);
