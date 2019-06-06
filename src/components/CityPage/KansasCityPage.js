import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class KansasCity extends Component {
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_KC',
            payload: this.props.reduxState.getKansasCity
        })
    }

    render (){
        return (
            <div>KCMO</div>
        )
    }
}

export default connect(mapReduxStateToProps)(KansasCity);


