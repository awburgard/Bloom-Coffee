import React from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import JournalInputFields from '../JournalInputFields/JournalInputFields';


const AddEntryDialog = (props) => {
    const { show, handleAddToggle } = props;
    return (
        <Dialog open={show} onClose={handleAddToggle} maxWidth={"lg"} fullWidth={true}>
            <DialogTitle>Add Journal Entry</DialogTitle>
            <DialogContent>
                <JournalInputFields handleClose={handleAddToggle} />
            </DialogContent>
        </Dialog>
    )
}



export default connect(mapReduxStateToProps)(AddEntryDialog)
