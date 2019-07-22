import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import './Map.css';

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


    render() {
        const coffeeShops = this.props.reduxState.setCoffeeShops.map((shop, index) => {
            return (
                <div className="pin-holder"
                    lat={shop.lat} // Where should the marker go?
                    lng={shop.lng}
                >
                </div>
            )
        })


        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.GOOGLE_API }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {coffeeShops}
                </GoogleMapReact>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Map);