import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';
import JournalInputFields from '../JournalInputFields/JournalInputFields';

class AddEntryForm extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SHOPS',
            payload: { city_id: this.props.reduxState.user.home_city }
        })
    }
    render (){
        return (
            <div>
                <JournalInputFields />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(AddEntryForm));
