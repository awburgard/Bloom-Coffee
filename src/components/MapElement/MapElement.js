import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Map from '../Map/Map';

class MapElement extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    onFormChange = (value) => event => {
    }

    submitForm = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Map />
                <h1>HERE IS SOME OTHER STUFF!</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(MapElement);