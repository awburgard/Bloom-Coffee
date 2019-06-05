import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../Modules/mapReduxStateToProps'

class TastingJournal extends Component {
    render(){
        return (
            <div>MMMM Delicious Coffee</div>
        )
    }
}

export default connect(mapStateToProps)(TastingJournal);
