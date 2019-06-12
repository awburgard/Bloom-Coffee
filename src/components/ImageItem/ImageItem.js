import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';


class ImageItem extends Component {
    render() {
        return (
            <div key={this.props.key}>
                <p>{this.props.shop.shop_name}</p>
                <img src={this.props.shop.shop_logo} alt={this.props.shop.shop_name}/>
            </div>

        )
    }
}

export default connect(mapReduxStateToProps)(ImageItem);
