import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';



const styles = (theme: Theme) => createStyles({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
});

class SliderComp extends Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <Slider
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    step={1}
                    marks
                />
            </div>
        )
    }
}
export default connect(mapReduxStateToProps)(withStyles(styles)(SliderComp));
