import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import ImageItem from '../ImageItem/ImageItem';

class ImageList extends Component {
    render() {
        const coffeeShops = this.props.reduxState.setCoffeeShops.map((shop, index) => {
            return (
                <ImageItem
                    key={index}
                    shop={shop}
                    index={index}
                />

            )
        })
        return (
            <div>
                {coffeeShops}
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(ImageList);
