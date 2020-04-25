import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';
import JournalInputFields from '../JournalInputFields/JournalInputFields';

const AddEntryForm = (props) => {
    const { dispatch, reduxState } = props;

    useEffect(() => {
        dispatch({
            type: 'GET_SHOPS',
            payload: { city_id: reduxState.user.home_city }
        })
    })

    return (
        <div>
            <JournalInputFields />
        </div>
    )
}

export default connect(mapReduxStateToProps)(withRouter(AddEntryForm));
