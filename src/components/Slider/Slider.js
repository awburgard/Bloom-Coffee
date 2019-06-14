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
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                />
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(Slider);
