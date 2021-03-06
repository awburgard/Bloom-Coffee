import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import JournalInputFields from '../JournalInputFields/JournalInputFields';
import CircularProgress from '@material-ui/core/CircularProgress';

class EditEntryForm extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SHOPS',
            payload: { city_id: this.props.reduxState.user.home_city }
        })
        if (this.props.location.search) {
            this.setState({
                editing: true,
            })
            this.props.dispatch({
                type: 'GET_ENTRY',
                payload: queryString.parse(this.props.location.search).entry
            })
        }
    }

    componentWillUnmount(){
        this.props.dispatch({
            type: 'CLEAR_TASTING_JOURNAL_ENTRY'
        })
    }

    render (){
        let content = <CircularProgress>LOADING</CircularProgress>;

        if (this.props.reduxState.setTastingJournalEntry
            && this.props.reduxState.setTastingJournalEntry.coffee_shop_id
        ) {
            content = <JournalInputFields initialData={this.props.reduxState.setTastingJournalEntry} editing={true} />
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(EditEntryForm));
