import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';

class Slider extends Component {
    render() {
        return (
            <div className={classes.root}>
                <Typography id="discrete-slider" gutterBottom>
                </Typography>
                <Slider
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                />
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(Slider);
