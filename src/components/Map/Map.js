import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

    static defaultProps = {
        center: {
            lat: 39.0983261, //Where are we heading when we load the map?
            lng: -94.5804415
        },
        zoom: 11
    };

    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    clickMarker = (message) => (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {

        let toast = <div></div>;

        if (this.state.clicked) {
            toast = (
                <div>
                    HAIL HYDRA!
                </div>
            )
        }

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>

                {toast}

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.GOOGLE_API }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <div
                       onClick={this.clickMarker('Hail!')}
                        lat={39.0983261} // Where should the marker go?
                        lng={-94.5783415}
                    >
                        Hail Enhydra
                </div>
                </GoogleMapReact>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Map);