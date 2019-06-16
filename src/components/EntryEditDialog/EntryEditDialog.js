import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import JournalInputFields from '../JournalInputFields/JournalInputFields';


class AddEntryDialog extends Component {
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



export default connect(mapReduxStateToProps)(AddEntryDialog)
