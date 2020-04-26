import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import ImageItem from '../ImageItem/ImageItem';
import Grid from '@material-ui/core/Grid';

class ImageList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_ALL_SHOPS',
        })
    }

    render() {
        return (
            <>
                <Grid container>
                    {this.props.reduxState.setCoffeeShops.map((shop, index) => {
                        return (
                            <Grid item xs={12} md={4} key={index}>
                                <ImageItem
                                    key={index}
                                    shop={shop}
                                    index={index}
                                />
                            </Grid>

                        )
                    })}
                </Grid>
            </>

        )
    }
}

export default connect(mapReduxStateToProps)(ImageList);
