import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../Map/Map';

class MapElement extends Component {
    render() {
        return (
            <div>
                <Map />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(MapElement);