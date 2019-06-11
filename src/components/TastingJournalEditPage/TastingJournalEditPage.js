import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import JournalInputFields from '../JournalInputFields/JournalInputFields'

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
    render (){
        return (
            <div>
                <JournalInputFields initialData={this.props.reduxState.getTastingJournalEntry}/>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(EditEntryForm));
