import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';

class JournalItem extends Component {
    render(){
        return(
            <div>Hello</div>
        )
    }
}

export default connect(mapReduxStateToProps)(JournalItem);
