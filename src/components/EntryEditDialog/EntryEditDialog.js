import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import JournalInputFields from '../JournalInputFields/JournalInputFields';


class EditEntryDialog extends Component {
    render() {
        return (
            <Dialog open={this.props.show} onClose={this.props.handleAddToggle} maxWidth={"lg"} fullWidth={true}>
                <DialogTitle>Add Journal Entry</DialogTitle>
                <DialogContent>
                    <JournalInputFields handleClose={this.props.handleAddToggle}/>
                </DialogContent>
            </Dialog>
        )
    }
}



export default connect(mapReduxStateToProps)(EditEntryDialog)
