import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import {Typography} from '@material-ui/core'

class Slider extends Component {
    render() {
        return (
            <div>
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
